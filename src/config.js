export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "arm-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://y4g9vq2vcb.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_s5yT9ikfG",
    APP_CLIENT_ID: "1qgahf4q0hfpa4ve521lnvscn8",
    IDENTITY_POOL_ID: "us-east-2:e07092e0-0aac-451d-bb89-024780ce0f1c"
  }
};