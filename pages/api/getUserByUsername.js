const { TwitterApi } = require("twitter-api-v2");

async function handler(req, res) {
  try {
    const twitterClient = new TwitterApi('bearerToken');
    const user = await twitterClient.v2.userByUsername(req.query.username);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
