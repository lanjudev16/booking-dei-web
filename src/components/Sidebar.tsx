import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { AiOutlineHome, AiOutlineCalendar } from "react-icons/ai";
import { TbBed, TbUsers, TbBrandGoogleAnalytics } from "react-icons/tb";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar = ({ collapsed }: SidebarProps) => {
  const location = useLocation();
  const dateTime = new Date();
  const currentYear = dateTime.getFullYear().toString();

  // Determine the selected key based on the current path
  let selectedKey;
  switch (location.pathname) {
    case "/":
      selectedKey = "1";
      break;
    case "/calender":
      selectedKey = "2";
      break;
    case "/new-booking":
      selectedKey = "3";
      break;
    case "/guest-lookup":
      selectedKey = "4";
      break;
    case "/financial-overview":
      selectedKey = "5";
      break;

    default:
      selectedKey = "1";
  }

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Link
          to="/"
          className="p-5 flex items-center gap-3 border-gray-300 border-b hover:text-black"
        >
          <img src={logo} alt="Sumudro bilash" className="cursor-pointer" />
          {!collapsed && (
            <span className="font-semibold text-xl cursor-pointer">
              Somudra <br /> Bilash
            </span>
          )}
        </Link>

        <div className="demo-logo-vertical" />
        <p className="text-gray-400 text-center py-4">APPS & PAGES</p>
        <Menu theme="light" mode="inline" selectedKeys={[selectedKey]}>
          <Menu.Item key="1" icon={<AiOutlineHome />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AiOutlineCalendar />}>
            <Link to="/calender">Calendar</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<TbBed />}>
            <Link to="/new-booking">Booking</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<TbUsers />}>
            <Link to="/guest-lookup">Guest Look-up</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<TbBrandGoogleAnalytics />}>
            <Link to="/financial-overview">Financial Overview</Link>
          </Menu.Item>
        </Menu>

        {/* footer part for sidebar */}
        <p className="mt-48 mb-0 text-gray-500 text-center pt-40 text-sm">
          All Rights Reserved, {currentYear}
        </p>
      </Sider>
    </>
  );
};

export default Sidebar;