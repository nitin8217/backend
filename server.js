require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {processData} = require("./controllers/bhflController.js");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.post("/bfhl", processData);
// app.post("/bfhl", (req, res) => {
//     try {
//         const { data } = req.body;
//         if (!Array.isArray(data)) {
//             return res.status(400).json({ is_success: false, message: "Invalid input format" });
//         }

//         const numbers = data.filter((item) => !isNaN(item));
//         const alphabets = [];
//         data.forEach((item) => {
//             if (/^[a-zA-Z]$/.test(item)) {
//                 alphabets.push(item);
//             }
//         });
//         const allAlphabets = [...alphabets];
//         const highestAlphabet = alphabets.length > 0 ? [alphabets.sort().pop()] : [];

//         res.json({
//             is_success: true,
//             user_id: "sanyam_choudhary_01012000",
//             email: "sanyam@example.com",
//             roll_number: "ABC123",
//             numbers,
//             alphabets,
//             highest_alphabet: highestAlphabet,
//         });
//     } catch (error) {
//         res.status(500).json({ is_success: false, message: "Internal Server Error" });
//     }
// });

app.get("/bfhl", (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
