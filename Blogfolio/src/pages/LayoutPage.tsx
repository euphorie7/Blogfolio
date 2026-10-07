import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const LayoutPage = () => {
  return (
    <div className="min-h-screen  w-full bg-[#f5f5f7] text-[#1d1d1f]">
      
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPage;