const express = require('express');
const router = express.Router();
const { themeController } = require('../controllers')

router.post("/setTheme",themeController.setTheme);
router.get("/getTheme",themeController.getTheme);

module.exports = router;