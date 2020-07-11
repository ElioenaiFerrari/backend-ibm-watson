import {
  Router
} from 'express'
import WatsonController from '../controllers/watson';

const router = Router();

router.post('/chat', WatsonController.chat);

export default router;