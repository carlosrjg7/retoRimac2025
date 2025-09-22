import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  const location = useLocation();
  const isRoot = location.pathname === "/";

  return (
    <div className={`${isRoot ? "container--bg-root" : "container--bg-white"}`}>
      <Header />
      <main className='grid-container grid-container--bg'>
        <Outlet />
      </main>
      {isRoot && <Footer />}
    </div>
  );
}
