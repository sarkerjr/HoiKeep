import { prisma } from '@/utils/prisma';

export const getAll = async () => {
  return await prisma.$transaction(async (tx) => {
    const totalStudents = await tx.students.count();

    const totalDepartments = await tx.departments.count();

    const totalRooms = await tx.rooms.count();

    const totalSeats = await tx.seats.count();

    const totalAuthorities = await tx.authorities.count();

    const totalStaffs = await tx.staffs.count();

    const totalOperators = await tx.operators.count();

    return {
      totalStudents,
      totalDepartments,
      totalRooms,
      totalSeats,
      totalAuthorities,
      totalStaffs,
      totalOperators,
    };
  });
};
