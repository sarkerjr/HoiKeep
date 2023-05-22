const express = require('express');

const hallController = require('../../controllers/admin/hall.controller');

const router = express.Router();

router.post('/create', hallController.create);

module.exports = router;
