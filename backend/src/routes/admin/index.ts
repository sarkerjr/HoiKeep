import { Router } from 'express';

import hallRoutes from './hall.routes';
import departmentRoutes from './department.routes';
import noticeRoutes from './notice.routes';
import authorityRoutes from './authority.routes';
import staffRoutes from './staff.routes';
import operatorRoutes from './operator.routes';
import designationRoutes from './designation.routes';
import positionRoutes from './position.routes';
import studentRoutes from './student.routes';
import degreeRoutes from './degree.routes';
import roomRoutes from './room.routes';
import seatRoutes from './seat.routes';

const router = Router();

router.use('/hall', hallRoutes);
router.use('/department', departmentRoutes);
router.use('/notice', noticeRoutes);
router.use('/authority', authorityRoutes);
router.use('/staff', staffRoutes);
router.use('/operator', operatorRoutes);
router.use('/designation', designationRoutes);
router.use('/position', positionRoutes);
router.use('/student', studentRoutes);
router.use('/degree', degreeRoutes);
router.use('/room', roomRoutes);
router.use('/seat', seatRoutes);

export default router;
