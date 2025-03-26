import { Bell, LogOutIcon, Search, Settings, User } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUserDetails } from "@/redux/UserRedux/userActions";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(
      setUserDetails({
        isLoggedIn: false,
        useremail: "",
      })
    );
    navigate("/login");
  };

  return (
    <header
      className={`sticky top-0 z-30 flex h-16 w-full items-center justify-between bg-background/95 px-4 sm:px-6 backdrop-blur-sm transition-shadow duration-300 border-b `}
    >
      <div>
        <div className="flex gap-3 items-center">
          <Label htmlFor="">Review</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <div className="bg-[#40E1FA1A] p-1.5 text-[#2CA01D] text-xs rounded">
            Quickbook’s Data
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end space-x-4">
        <div className="p-1.5 h-10 w-10 bg-[#603AE51A] flex justify-center items-center rounded-lg">
          <Search className="h-6 w-6 text-[#603AE5]" />
        </div>
        <div className="p-1.5 px-3 font-semibold h-10  bg-[#603AE51A] flex justify-center items-center rounded-lg">
          <div className="text-[#603AE5] text-sm">Export to Excel</div>
        </div>
        <div className="p-1.5 px-3 font-semibold h-10  bg-[#603AE51A] flex justify-center items-center rounded-lg">
          <div className="text-[#603AE5] text-sm">Add Dcoument</div>
        </div>
        <div className="p-1.5 px-3 font-semibold h-10  bg-[#603AE51A] flex justify-center items-center rounded-lg">
          <div className="text-[#603AE5] text-sm">Connect</div>
        </div>
        <div className="p-1.5 h-10 w-10 bg-[#603AE51A] flex justify-center items-center rounded-lg">
          <Bell className="h-6 w-6 text-[#603AE5]" />
        </div>
        <div className="p-1.5 h-10 w-10 bg-[#603AE51A] flex justify-center items-center rounded-lg">
          <Settings className="h-6 w-6 text-[#603AE5]" />
        </div>
        <div className="relative z-10">
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="p-1.5 h-10 w-10 bg-[#603AE51A] flex justify-center items-center  transition-transform hover:scale-105 rounded-lg">
                <User className="h-6 w-6 text-[#603AE5]" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-[160px]" align="end">
              <div className="flex gap-2 cursor-pointer" onClick={handleLogout}>
                <LogOutIcon />
                <span>Logou</span>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
