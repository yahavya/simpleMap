const { TwitterApi } = require("twitter-api-v2");

const express = require("express");
const cors = require("cors");
const app = express();

const port = 8080;

app.use(cors( {origin: true}));
app.use(express.json());


app.get("/api/getDemagogues", async (req, res) => {
//async function handler(req, res) {
  try {
    //const twitterClient = new TwitterApi('bearerToken');
    //const user = await twitterClient.v2.userByUsername(req.query.username);
    //res.status(200).json(user);
    res.json({ success: true, demagogues_list: {"ilay": 100, "yaron": 50, "bengvir": 1000}, "names": "this is yaron"}) }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
