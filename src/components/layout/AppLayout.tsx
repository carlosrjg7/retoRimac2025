import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useCallback } from "react";
import Navbar from "../ui/Navbar";
import { useQuotation } from "@/hooks/useQuotation";

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { updateQuotation } = useQuotation();

  const isRoot = location.pathname === "/";
  const isResume = location.pathname === "/plans/resume";

  const handleBack = useCallback(() => {
    if (isResume) {
      updateQuotation({ planSelected: null, quotationFor: null });
      navigate("/plans");
    } else {
      navigate("/");
    }
  }, [navigate, isResume, updateQuotation]);

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
