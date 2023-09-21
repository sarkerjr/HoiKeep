import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import { getDashboardData } from '@/controllers/admin/dashboard.controllers';

const router = express.Router();

router.get(
  '/',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  getDashboardData
);

export default router;
