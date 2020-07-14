const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
const { Meeting } = require('../models');

class Assistant {
  constructor(assistantId, apiKey, url) {
    this.assistantId = assistantId;
    this.apiKey = apiKey;
    this.url = url;
    this.sessionId = null;
    this.init();
  }

  async createSession() {
    try {
      const response = await this.watson.createSession({
        assistantId: this.assistantId,
      });

      this.sessionId = response.result.session_id;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteSession() {
    await this.watson.deleteSession({
      assistantId: this.assistantId,
      sessionId: this.sessionId,
    });
  }

  init() {
    this.watson = new AssistantV2({
      authenticator: new IamAuthenticator({
        apikey: this.apiKey,
      }),
      disableSslVerification: true,
      url: this.url,
      version: '2018-02-16',
    });

    this.createSession();
  }

  resolveResponse(error, response) {
    if (error) {
      console.log(error);
      return;
    }

    return response;
  }

  async setMeeting(confirm, date, time) {
    if (confirm === 'Sim') {
      console.log('===================Entrou');
      await Meeting.create({
        date,
        time,
      });
    } else {
      return null;
    }
  }

  verifyEntity(entity, value) {
    switch (entity) {
      case 'sys-date':
        this.date = value;
        break;
      case 'sys-time':
        this.time = value;
        break;
      case 'confirm':
        this.setMeeting(value, this.date, this.time);
        break;
      default:
        return;
    }
  }

  async message(params) {
    try {
      const response = await this.watson.message(params, this.resolveResponse);

      const sys = response.result.output.entities[0] || {};

      if (sys.entity && sys.value) {
        this.verifyEntity(sys.entity, sys.value);
      }

      return response.result.output.generic;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Assistant;
