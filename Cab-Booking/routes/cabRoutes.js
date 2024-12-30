const express = require("express");
const { addCab, getAvailableCabs,getAllCabs } = require("../controllers/cabController");

const router = express.Router();

router.post("/", addCab);
router.post('/nearest',getAvailableCabs);
router.get('/',getAllCabs);

module.exports = router;
