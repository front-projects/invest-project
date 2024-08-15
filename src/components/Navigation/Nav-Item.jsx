import { NavLink } from "react-router-dom";
import WebApp from "@twa-dev/sdk";

export default function NavItem({ children, to }) {
  const setVibro = () => {
    WebApp.HapticFeedback.impactOccurred("soft");
  };

  return (
    <NavLink
      to={to}
      onClick={setVibro}
      className={`flex justify-center text-[#000000]`}
    >
      [ {children} ]
    </NavLink>
  );
}
