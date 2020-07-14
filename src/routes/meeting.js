const { Router } = require('express');
const { MeetingController } = require('../controllers');

const router = Router();

router.post('/meetings', MeetingController.store);

module.exports = router;
