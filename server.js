require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {processData} = require("./controllers/bhflController.js");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.post("/bfhl", processData);

app.get("/bfhl", (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
