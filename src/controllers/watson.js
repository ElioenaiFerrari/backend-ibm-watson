const Assistant = require('../services/assistant');
const watsonConfig = require('../config/watson');

const { WORKSPACE_ID, ASSISTANT_APIKEY, ASSISTANT_URL } = watsonConfig;

const assistant = new Assistant(WORKSPACE_ID, ASSISTANT_APIKEY, ASSISTANT_URL);

const WatsonController = {
  async chat(req, res) {
    const { text, context = {} } = req.body;

    const params = {
      input: {
        text,
      },
      context,
      sessionId: assistant.sessionId,
      assistantId: assistant.assistantId,
    };

    try {
      const response = await assistant.message(params);

      return res.json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = WatsonController;
