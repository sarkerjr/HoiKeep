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

const router = express.Router();

router.get('/', checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]), getRooms);
router.get(
  '/:id',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  getRoom
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  createRoom
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  updateRoom
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  removeRoom
);

export default router;
