import { Router } from 'express';

import isAuthenticated from '@/middleware/auth.middleware';

import adminRoutes from './admin/index';
import authRoutes from './auth.routes';

const router = Router();

// health check
router.use('/ping', (req, res) => {
  res.send('Pong!');
});

router.use('/admin', isAuthenticated, adminRoutes);
router.use('/auth', authRoutes);

export default router;
