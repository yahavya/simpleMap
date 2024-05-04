const { TwitterApi } = require("twitter-api-v2");

const injectUser = () => {
// OAuth2 (app-only or user context)
// Create a client with an already known bearer token
const twitterClient = new TwitterApi('bearerToken');

(async () => {
  try {
    const usernameLookup = await twitterClient.v2.usersByUsernames('username')
      //The Twitter username (handle) of the users

    console.dir(usernameLookup, {
      depth: null,
    });
  } catch (error) {
    console.log(error);

  }
})();

}
