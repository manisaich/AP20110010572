const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/numbers", async (req, res) => {
  const params = req.query;

  let nums = [];
  let uni = [];

  const requests = params.url.map((url) => axios.get(url));

  const val = await axios.all(requests).then((responses) => {
    responses.forEach((resp) => {
      let msg = {
        server: resp.headers.server,
        status: resp.status,
        fields: Object.keys(resp.data).toString(),
        data: resp.data,
      };

      msg.data.numbers.map((ele) => {
        nums.push(ele);
      });
    });

    uni = [...new Set(nums)];

    return uni.sort((a, b) => a - b);
  });

  res.status(200).json(val);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});