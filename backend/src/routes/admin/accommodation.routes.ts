import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createAccommodation,
  getAccommodations,
  getAccommodation,
  updateAccommodation,
  removeAccommodation,
} from '@/controllers/admin/accommodation.controllers';

import {
  validateCreateAccommodation,
  validateGetAccommodation,
  validateUpdateAccommodation,
  validateRemoveAccommodation,
} from '@/validators/accommodation.validators';

const router = express.Router();

router.get(
  '/',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  getAccommodations
);

router.get(
  '/:id',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  validateGetAccommodation,
  getAccommodation
);

router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateCreateAccommodation,
  createAccommodation
);

router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateUpdateAccommodation,
  updateAccommodation
);

router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateRemoveAccommodation,
  removeAccommodation
);

export default router;
