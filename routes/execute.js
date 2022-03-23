import { Router } from 'express';

import { executeController } from '../controllers/execute.js';

const router = Router();

router.post('/execute', executeController);

export default router;
