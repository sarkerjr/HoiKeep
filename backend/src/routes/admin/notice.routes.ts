import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createNotice,
  getNotices,
  updateNotice,
  removeNotice,
} from '@/controllers/admin/notice.controllers';

import {
  validateCreateNotice,
  validateUpdateNotice,
  validateRemoveNotice,
} from '@/validators/notice.validators';

const router = express.Router();

router.get(
  '/',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  getNotices
);
router.post(
  '/',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  validateCreateNotice,
  createNotice
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  validateUpdateNotice,
  updateNotice
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  validateRemoveNotice,
  removeNotice
);

export default router;
