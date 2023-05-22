const express = require('express');

const studentRoutes = require('./student.routes');
const hallRoutes = require('./hall.routes');

const router = express.Router();

router.use('/student', studentRoutes);
router.use('/hall', hallRoutes);

module.exports = router;
