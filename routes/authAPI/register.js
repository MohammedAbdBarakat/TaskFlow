const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/authentications/registerController');

router.post('/', registerController.handleSignup);

module.exports = router;