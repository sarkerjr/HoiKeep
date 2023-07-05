import { Router } from 'express';

import hallRoutes from './hall.routes';
import departmentRoutes from './department.routes';
import noticeRoutes from './notice.routes';
import authorityRoutes from './authority.routes';
import staffRoutes from './staff.routes';
import operatorRoutes from './operator.routes';

const router = Router();

router.use('/hall', hallRoutes);
router.use('/department', departmentRoutes);
router.use('/notice', noticeRoutes);
router.use('/authority', authorityRoutes);
router.use('/staff', staffRoutes);
router.use('/operator', operatorRoutes);

export default router;
