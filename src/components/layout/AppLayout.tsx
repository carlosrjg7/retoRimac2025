import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useCallback } from "react";
import Navbar from "../ui/Navbar";

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isRoot = location.pathname === "/";

  const handleBack = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`${isRoot ? "container--bg-root" : "container--bg-white"}`}>
      <Header />
      {!isRoot && <Navbar handleBack={handleBack} />}
      <main className='grid-container grid-container--bg'>
        <Outlet />
      </main>
      {isRoot && <Footer />}
    </div>
  );
}
