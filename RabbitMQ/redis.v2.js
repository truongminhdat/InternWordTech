const express = require("express");
const app = express();

app.get("/order", (req, res) => {
  const time = new Date().getTime();
  console.log(`Time requests::::::${time}`);
  return res.json({
    status: "success",
    msg: "Ok",
    time,
  });
});
app.listen(3000, () => {
  console.log(`The server is running 3000`);
});
