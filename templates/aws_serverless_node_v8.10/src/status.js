export const handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      running: 'OK',
      NODE_ENV: process.env.NODE_ENV,
      GIT_COMMIT: process.env.GIT_COMMIT_VERSION,
    }),
  });
};
