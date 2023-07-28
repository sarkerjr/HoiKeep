import express from 'express';

import { checkAuth, createAuth } from '@/controllers/auth/auth.controllers';

const router = express.Router();

router.post('/login', checkAuth);
router.post('/register', createAuth);

export default router;
