import 'dotenv/config';




const watsonConfig = {
  ASSISTANT_APIKEY: process.env.ASSISTANT_APIKEY,
  ASSISTANT_IAM_APIKEY: process.env.ASSISTANT_IAM_APIKEY,
  ASSISTANT_APIKEY: process.env.ASSISTANT_APIKEY,
  ASSISTANT_URL: process.env.ASSISTANT_URL,
  // API_PASSWORD: process.env.API_PASSWORD,
  ASSISTANT_AUTH_TYPE: process.env.ASSISTANT_AUTH_TYPE,
  WORKSPACE_ID: process.env.WORKSPACE_ID,
  ASSISTANT_IAM_URL: process.env.ASSISTANT_IAM_URL,
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD,
}

export default watsonConfig