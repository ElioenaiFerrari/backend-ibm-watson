const { Router } = require('express');
const { WatsonController } = require('../controllers');

const router = Router();

router.post('/chat', WatsonController.chat);

module.exports = router;
