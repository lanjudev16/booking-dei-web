import { useState } from "react";
// global css
import { Layout } from "antd";
import "./global.scss";
const { Content } = Layout;
// react router
import { Route, Routes } from "react-router-dom";
// components
import Sidebar from "./components/Sidebar";
// pages
import Toolbar from "./components/Toolbar";
import Calender from "./pages/Calender/Calender";
import EditBooking from "./pages/EditBooking.tsx/EditBooking";
import Error from "./pages/Error/Error";
import GuestLookUp from "./pages/GuestLookUp/GuestLookUp";
import Login from "./pages/Login/Login";
import NewBooking from "./pages/NewBooking/NewBooking";
import FinancialOverview from "./pages/Transactions/Transactions";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      {/* sidebar */}
      <Sidebar collapsed={collapsed} />
      <Layout>
        {/* toolbar */}
        <Toolbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content className="p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/new-booking" element={<NewBooking />} />
            <Route path="/edit-booking/:id" element={<EditBooking />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/guest-lookup" element={<GuestLookUp />} />
            <Route path="/transactions" element={<FinancialOverview />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
