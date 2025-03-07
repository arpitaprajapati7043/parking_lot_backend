const express = require('express');
const router = express.Router();
const parkingController=require('../controller/parkingController')
// Define routes with correct handler functions
router.get('/', parkingController.getSlots);

module.exports = router;