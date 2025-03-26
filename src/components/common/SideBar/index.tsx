import { useState, useEffect } from "react";

import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import WebUrl from "@/enums/WebUrl";
import Logo from "../../../assets/logo.svg";
import Dashboard from "../../../assets/dashboard.svg";
import Accounting from "../../../assets/ac.svg";
import Banking from "../../../assets/banking.svg";
import Reports from "../../../assets/reports.svg";
import Contacts from "../../../assets/contacts.svg";
import Invoicing from "../../../assets/invoice.svg";
import Queries from "../../../assets/queries.svg";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navigation: NavItem[] = [
  { name: "Dashboard", href: WebUrl.DASHBOARD, icon: <Dashboard /> },
  { name: "Accounting", href: WebUrl.ACCOUNTING, icon: <Accounting /> },
  { name: "Banking", href: WebUrl.BANKING, icon: <Banking /> },
  { name: "Reports", href: WebUrl.REPORTS, icon: <Reports /> },
  { name: "Contacts", href: WebUrl.CONTACTS, icon: <Contacts /> },
  { name: "Invoicing", href: WebUrl.INVOICING, icon: <Invoicing /> },
  { name: "Queries", href: WebUrl.QUERIES, icon: <Queries /> },
];

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-50 rounded-md p-2 text-primary bg-secondary/80 backdrop-blur-sm"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Menu className="h-4 w-4" aria-hidden="true" />
        )}
      </button>

      <div className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:z-50 lg:w-20 text-white">
        <div className="flex flex-col h-full  bg-[#603AE5] shadow-sm animate-slide-in-left">
          <div className="sidebar-logo  p-2 mb-5">
            <Link to="/" className="flex flex-col items-center justify-center">
              <Logo />
            </Link>
          </div>
          <div className="flex-1 overflow-y-auto py-0">
            <nav className="flex flex-col gap-1">
              {navigation.map((item: NavItem, index: number) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`nav-item animate-fade-in flex flex-col justify-center items-center py-1.5 ${
                      isActive
                        ? "border-l-4 border-white bg-[#6e57cb]"
                        : "border-l-4 border-transparent"
                    }`}
                    style={{ animationDelay: `${150 + index * 50}ms` }}
                  >
                    <div className="h-5 w-5 mb-2">{item.icon}</div>
                    <span className="text-xs">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative flex max-w-52 flex-1 flex-col bg-background pt-5 pb-4 animate-slide-in-left">
            <div className="sidebar-logo p-6">
              <Link
                to="/"
                className="flex flex-col items-center justify-center"
              >
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="h-5 w-5 animate-scale-in"
                />
                <h1
                  className="sidebar-title mt-3 animate-fade-in"
                  style={{ animationDelay: "100ms" }}
                >
                  Luminary
                </h1>
              </Link>
            </div>
            <div className="flex-1 overflow-y-auto px-4">
              <nav className="flex flex-col gap-3 mt-5">
                {navigation.map((item, index) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`nav-item flex gap-2 py-1 animate-fade-in ${
                        isActive
                          ? "border-l-4 border-blue-700"
                          : "border-l-4 border-transparent"
                      }`}
                      style={{ animationDelay: `${150 + index * 50}ms` }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div>{item.icon}</div>
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
