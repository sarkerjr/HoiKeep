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

import {
  validateCreateDesignation,
  validateGetDesignation,
  validateUpdateDesignation,
  validateRemoveDesignation,
} from '@/validators/designation.validators';

const router = express.Router();

router.get(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  getDesignations
);
router.get(
  '/:id',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  validateGetDesignation,
  getDesignation
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateCreateDesignation,
  createDesignation
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateUpdateDesignation,
  updateDesignation
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateRemoveDesignation,
  removeDesignation
);

export default router;
