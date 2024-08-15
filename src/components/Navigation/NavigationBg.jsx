import { InvestBg } from "../UI/icons";
import { InvestBg2 } from "../UI/icons";
import { PartnersBg } from "../UI/icons";
import { PartnersBg2 } from "../UI/icons";
import { StatsBg } from "../UI/icons";
import { StatsBg2 } from "../UI/icons";
import { useLocation } from "react-router-dom";

export default function NavigationBg() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <div className="absolute h-[47px] w-full">
        {pathname.includes("invest") ? (
          <InvestBg2 />
        ) : pathname.includes("partners") ? (
          <PartnersBg2 />
        ) : (
          <StatsBg2 />
        )}
      </div>
      <div className="absolute h-[47px] top-[6px] inset-0 w-full">
        {pathname.includes("invest") ? (
          <InvestBg />
        ) : pathname.includes("partners") ? (
          <PartnersBg />
        ) : (
          <StatsBg />
        )}
      </div>
    </>
  );
}
