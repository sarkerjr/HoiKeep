import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createRoom,
  getRooms,
  getRoom,
  updateRoom,
  removeRoom,
} from '@/controllers/admin/room.controllers';

import {
  validateCreateRoom,
  validateGetRoom,
  validateUpdateRoom,
  validateRemoveRoom,
} from '@/validators/room.validators';

const router = express.Router();

router.get(
  '/',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  getRooms
);
router.get(
  '/:id',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  validateGetRoom,
  getRoom
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateCreateRoom,
  createRoom
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateUpdateRoom,
  updateRoom
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateRemoveRoom,
  removeRoom
);

export default router;
