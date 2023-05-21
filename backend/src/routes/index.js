const express = require('express');

const adminRoutes = require('./admin/index');

const router = express.Router();

router.use('/admin', adminRoutes);

module.exports = router;
