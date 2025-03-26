import { createHashRouter, Navigate, RouterProvider } from "react-router";
import AppLayout from "./layout/PublicFormLayout";
import PrivateRoute from "./PrivateRoute";
import WebUrl from "./enums/WebUrl";
import { Login } from "./pages/Login";
import PageNotFoundScreen from "./pages/PageNotFoundScreen";
import AccountingPage from "./pages/Accounting";
import DashboardLayout from "./layout/DashboardLayout";

const AppRouting: any = () => {
  const router = createHashRouter([
    {
      path: WebUrl.BASE,
      element: (
        <PrivateRoute passIf="login">
          <AppLayout />
        </PrivateRoute>
      ),
      children: [
        {
          path: WebUrl.LOGIN,
          element: <Login />,
        },
        {
          path: "",
          element: <Navigate to={WebUrl.LOGIN} />,
        },
      ],
    },
    {
      path: WebUrl.DASHBOARD,
      element: (
        <PrivateRoute passIf="logout">
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: [
        {
          path: WebUrl.ACCOUNTING,
          element: <AccountingPage />,
        },
        {
          path: WebUrl.DASHBOARD + "/",
          element: <div>Dashboard</div>,
        },
        {
          path: WebUrl.BANKING,
          element: <div>Banking</div>,
        },
        {
          path: WebUrl.REPORTS,
          element: <div>Reports</div>,
        },
        {
          path: WebUrl.CONTACTS,
          element: <div>Contacts</div>,
        },
        {
          path: WebUrl.INVOICING,
          element: <div>Invoicing</div>,
        },
        {
          path: WebUrl.QUERIES,
          element: <div>Queries</div>,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFoundScreen />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouting;
