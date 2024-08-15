import { useLocation } from "react-router-dom";
import { InvestIcon, PartnersIcon, StatsIcon } from "../UI/icons";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NavigationIcon() {
  const location = useLocation();
  const { pathname } = location;
  const iconRef = useRef(null);

  useEffect(() => {
    const anim = gsap.fromTo(
      iconRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0 },
    );
    return () => anim.kill();
  }, [pathname]);

  return (
    <div
      ref={iconRef}
      className={`h-[28px] absolute top-0 w-[354px] max-sm:w-[100vw]
    ${pathname.includes("invest") ? "pl-[70px]" : pathname.includes("partners") ? "pl-[162px]" : "pl-[264px]"}
    `}
    >
      {pathname.includes("invest") ? (
        <InvestIcon />
      ) : pathname.includes("partners") ? (
        <PartnersIcon />
      ) : (
        <StatsIcon />
      )}
    </div>
  );
}
