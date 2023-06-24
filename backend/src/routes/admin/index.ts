import { Router } from 'express';

import hallRoutes from './hall.routes';

const router = Router();

router.use('/hall', hallRoutes);

export default router;
