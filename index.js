const express = require("express");
const app = express();

const port = process.env.PORT || 4000;
// src/
//     config/
//     controllers/
//     middleware/
//     models/
//     routes/
//     utils/
//     index.js

app.listen(port, () => {
  console.log(`Server is on ${port}`);
});
