import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createDesignation,
  getDesignations,
  getDesignation,
  updateDesignation,
  removeDesignation,
} from '@/controllers/admin/designation.controllers';

const router = express.Router();

router.get(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  getDesignations
);
router.get(
  '/:id',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  getDesignation
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  createDesignation
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  updateDesignation
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  removeDesignation
);

export default router;
