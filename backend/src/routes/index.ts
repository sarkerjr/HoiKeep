import { Router } from 'express';

import adminRoutes from './admin/index';
import authRoutes from './auth.routes';

const router = Router();

router.use('/admin', adminRoutes);
router.use('/auth', authRoutes);

export default router;
