import { Router } from 'express';

import adminRoutes from './admin/index';

const router = Router();

router.use('/admin', adminRoutes);

export default router;
