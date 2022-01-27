const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/apiRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", routes);

app.listen(process.env.PORT || 3001, () => {
  console.log("Example app listening at http://localhost:3001");
});
