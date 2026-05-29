import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="site-shell">
      <div className="background-orb background-orb-left"></div>
      <div className="background-orb background-orb-right"></div>
      <Header />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}