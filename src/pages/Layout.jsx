import { Navigate, Outlet, useLocation } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Layout() {
  const location = useLocation();

  // const user = useSelector((state) => state.user);
  // if (user.status !== "succeeded") {
  //   return <Navigate to="loading" />;
  // }
  /* Rectangle 6329 */

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-between xl:hidden"
      id="main-wrapper"
    >
      <main className="w-full mt-[5px] rounded-t-[40px] flex flex-col items-center">
        <div
          style={{ height: "calc(100dvh - 79px)" }}
          className="flex flex-col items-center w-full"
        >
          <Outlet />
        </div>

        <Navigation />
      </main>
    </div>
  );
}
