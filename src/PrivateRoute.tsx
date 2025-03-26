import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import WebUrl from "./enums/WebUrl";

type passIf = "login" | "logout" | "admin" | "any";
interface PrivateRouteProps {
  passIf: passIf;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ passIf, children }) => {
  const storeData: any = useSelector((store: RootState) => store);
  const userDetails: any = storeData.user.userDetails;

  switch (passIf) {
    case "login":
      if (userDetails?.isLoggedIn) {
        return <Navigate to={WebUrl.DASHBOARD} />;
      } else {
        return children;
      }
    case "logout":
      if (userDetails?.isLoggedIn) {
        return children;
      } else {
        return <Navigate to={WebUrl.LOGIN} />;
      }

    case "any":
      return children;
    default:
      return <Navigate to={WebUrl.BASE} />;
  }
};

export default PrivateRoute;
