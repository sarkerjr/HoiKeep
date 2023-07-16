import { lazy } from "react";

// project imports
import Layout from "@/layout";
const Department = lazy(() => import("@/pages/admin/department"));
const Authority = lazy(() => import("@/pages/admin/authority"));
const Staff = lazy(() => import("@/pages/admin/staff"));
const Operator = lazy(() => import("@/pages/admin/operator"));

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
  ],
};

export default AdminRoutes;
