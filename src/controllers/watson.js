import Assistant from '../services/assistant';
import watsonConfig from '../config/watson';

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
      console.log(error);
      return res.status(500).json(error);
    }
  },
};

export default WatsonController;
