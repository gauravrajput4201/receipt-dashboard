import Header from "@/components/dashboard/header";
import Sidebar from "@/components/common/SideBar";
import { Outlet } from "react-router";
import QuickbookInterface from "@/components/dashboard/paymentdetails";
import { ScrollArea } from "@/components/ui/scroll-area";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-background h-dvh overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col w-full lg:pl-20 overflow-hidden">
        <ScrollArea className="h-dvh">
          <Header />
          <main className="flex-1 px-4 sm:px-5 lg:px-5 py-5 transition-all duration-300 ease-in-out overflow-auto bg-[#f5f5fa]">
            <Outlet />
          </main>
        </ScrollArea>
      </div>
      <div className="min-h-screen h-dvh">
        <QuickbookInterface />
      </div>
    </div>
  );
};

export default DashboardLayout;
