const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", require("./Routes/apiRoute"));

app.listen(process.env.PORT || 3001, () => {
  console.log("Example app listening at http://localhost:3001");
});
