import { Request, Response } from 'express';

import { getAll } from '@/services/dashboard.services';

export const getDashboardData = async (req: Request, res: Response) => {
  try {
    const dashboardData = await getAll();
    return res.status(200).json({
      students: dashboardData.totalStudents,
      departments: dashboardData.totalDepartments,
      rooms: dashboardData.totalRooms,
      seats: dashboardData.totalSeats,
      authorities: dashboardData.totalAuthorities,
      staffs: dashboardData.totalStaffs,
      operators: dashboardData.totalOperators,
    });
  } catch (error: any) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }
};
