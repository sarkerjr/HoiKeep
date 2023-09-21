import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createAuthority,
  getAuthorities,
  getAuthority,
  updateAuthority,
  removeAuthority,
} from '@/controllers/admin/authority.controllers';

import {
  validateCreateAuthority,
  validateGetAuthority,
  validateUpdateAuthority,
  validateRemoveAuthority,
} from '@/validators/authority.validators';

const router = express.Router();

router.get(
  '/',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  getAuthorities
);

router.get(
  '/:id',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  validateGetAuthority,
  getAuthority
);

router.post(
  '/',
  checkRoles([RoleType.AUTHORITY]),
  validateCreateAuthority,
  createAuthority
);

router.put(
  '/',
  checkRoles([RoleType.AUTHORITY]),
  validateUpdateAuthority,
  updateAuthority
);

router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY]),
  validateRemoveAuthority,
  removeAuthority
);

export default router;
