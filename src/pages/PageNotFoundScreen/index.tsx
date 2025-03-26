import WebUrl from "@/enums/WebUrl";
import { Link } from "react-router";

export interface PageNotFoundScreenProps {}

const PageNotFoundScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page Not Found</p>
        <Link
          to={WebUrl.BASE}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFoundScreen;
