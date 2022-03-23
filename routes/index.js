import { Router } from 'express';

import { executeController } from '../controllers/index.js';

const router = Router();

router.post('/execute', executeController);

export default router;
