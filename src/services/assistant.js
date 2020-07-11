import AssistantV2 from 'ibm-watson/assistant/v2';
import {
  IamAuthenticator
} from 'ibm-watson/auth'

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

  async message(params) {
    try {
      const response = await this.watson.message(params, this.resolveResponse);

      return response.result.output.generic;
    } catch (error) {
      console.log(error);

    }
  }

}

export default Assistant;