import { Router } from 'express';

import hallRoutes from './hall.routes';
import departmentRoutes from './department.routes';

const router = Router();

router.use('/hall', hallRoutes);
router.use('/department', departmentRoutes);

export default router;
