import { Router } from 'express';

import isAuthenticated from '@/middleware/auth.middleware';

import adminRoutes from './admin/index';
import authRoutes from './auth.routes';

const router = Router();

router.use('/admin', isAuthenticated, adminRoutes);
router.use('/auth', authRoutes);

export default router;
