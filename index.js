const express = require("express");
const cors = require('cors')


const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
  res.json({
    slackUsername: "SegunGhost",
    backend: true,
    age: 22,
    bio: "A passionate web developer",
  });
});

app.listen(5000, () => {
  console.log("This app is alive on port 5000");
});
