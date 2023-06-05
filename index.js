// index.js
const express = require("express");
const router = require("./router");
const PORT = 1338;
const app = express();
var cors = require('cors')

// Apply JSON parsing middleware
app.use(express.json());
app.use(cors())
// Apply router
app.use("/", router);
// Serving app on defined PORT
app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
