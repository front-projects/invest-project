import { Navigate, Outlet, useLocation } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Layout() {
  const location = useLocation();
  const { pathname } = location;
  const [background, setBackground] = useState("./main-bg.png");

  useEffect(() => {
    if (pathname !== "/menu/invest") {
      setBackground("./main-bg2.png");
    } else {
      setBackground("./main-bg.png");
    }
  }, [pathname]);

  const user = useSelector((state) => state.user);
  if (user.status !== "succeeded") {
    return <Navigate to="loading" />;
  }
  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-between xl:hidden"
      id="main-wrapper"
    >
      <main
        className="w-full mt-[5px] rounded-t-[40px]"
        style={{ backgroundImage: `url("${background}")` }}
      >
        <div style={{ height: "calc(100vh - 95px)" }}>
          <Outlet />
        </div>

        <Navigation />
      </main>
    </div>
  );
}
