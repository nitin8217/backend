const express = require("express");
const router = express.Router();
const bfhlController = require("../controllers/bfhlController");

router.post("/", bfhlController.processData);
router.get("/", bfhlController.getOperationCode);

module.exports = router;
