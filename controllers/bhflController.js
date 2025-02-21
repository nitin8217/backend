exports.processData = (req, res) => {
    try {
        const { data } = req.body;
        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input format" });
        }

        const numbers = data.filter((item) => !isNaN(item));
        const allAlphabets = [];
        data.forEach((item) => {
            if (/^[a-zA-Z]$/.test(item)) {
                allAlphabets.push(item);
            }
        });
        const alphabets = [...allAlphabets];
        const highestAlphabet = allAlphabets.length > 0 ? [allAlphabets.sort().pop()] : [];

        res.json({
            is_success: true,
            user_id: "sanyam_choudhary_01012000",
            email: "sanyam@example.com",
            roll_number: "ABC123",
            numbers,
            alphabets,
            highest_alphabet: highestAlphabet,
        });
    } catch (error) {
        res.status(500).json({ is_success: false, message: "Internal Server Error" });
    }
};

exports.getOperationCode = (req, res) => {
    res.json({ operation_code: 1 });
};
