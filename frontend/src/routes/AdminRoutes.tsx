import { lazy } from "react";

// project imports
import Layout from "@/layout";
const Department = lazy(() => import("@/pages/admin/department"));
const Authority = lazy(() => import("@/pages/admin/authority"));
const Staff = lazy(() => import("@/pages/admin/staff"));
const Operator = lazy(() => import("@/pages/admin/operator"));
const Seat = lazy(() => import("@/pages/admin/seat"));
const Room = lazy(() => import("@/pages/admin/room"));
const Degree = lazy(() => import("@/pages/admin/degree"));

const AdminRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/department",
      element: <Department />,
    },
    {
      path: "/authority",
      element: <Authority />,
    },
    {
      path: "/staff",
      element: <Staff />,
    },
    {
      path: "/operator",
      element: <Operator />,
    },
    {
      path: "/seat",
      element: <Seat />,
    },
    {
      path: "/room",
      element: <Room />,
    },
    {
      path: "/degree",
      element: <Degree />,
    },
  ],
};

export default AdminRoutes;
