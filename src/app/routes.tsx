import { createBrowserRouter } from "react-router";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import AttendanceManagement from "./pages/AttendanceManagement";
import EmployeeManagement from "./pages/EmployeeManagement";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "attendance", Component: AttendanceManagement },
      { path: "employees", Component: EmployeeManagement },
      { path: "reports", Component: Reports },
      { path: "settings", Component: Settings },
    ],
  },
]);
