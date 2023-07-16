import { useRoutes } from "react-router-dom";

// routes
import PublicRoutes from "./PublicRoutes";
import AdminRoutes from "./AdminRoutes";

export default function ThemeRoutes() {
  return useRoutes([PublicRoutes, AdminRoutes]);
}
