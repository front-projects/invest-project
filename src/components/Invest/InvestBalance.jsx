import WebApp from "@twa-dev/sdk";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { PAYMENT_URL } from "../../util/back/requests";

export default function InvestBalance() {
  const balance = useSelector((state) => state.user.info.balanceAmount);
  const token = useSelector((state) => state.auth.token);
  const params = new URLSearchParams(window.location.search);
  const login = params.get("data");
  const pass = params.get("pmain");
  const lang = params.get("lang");

  const moneyDeposit = () => {
    WebApp.HapticFeedback.impactOccurred("light");
    window.location.href = `${PAYMENT_URL}?mode=deposit&data=${login}&login=${login}&pass=${pass}&lang=${lang}`;
  };
  const moneyWithdraw = () => {
    WebApp.HapticFeedback.impactOccurred("light");
    window.location.href = `${PAYMENT_URL}?mode=withdraw&balance=${balance}&data=${token}&login=${login}&pass=${pass}&lang=${lang}`;
  };
  const ref = useRef(null);
  const refSmall = useRef(null);
  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, { translateY: 0, opacity: 1 });
    }
    if (refSmall.current) {
      gsap.to(refSmall.current, { translateY: 0, opacity: 1 });
    }
  }, []);

  return (
    <>
      <div
        ref={refSmall}
        className="px-[4px] flex items-center gap-2 justify-center translate-y-[100px] opacity-0 relative z-10 w-full xsmall:hidden"
      >
        <div className="text-[18px]" onClick={moneyDeposit}>
          [ Deposit ]
        </div>
        <div className="text-center">
          <h3 className="text-[20px] max-small:text-[16px]">Balance</h3>
          <h4 className="text-[26px]">{balance ? balance.toFixed(2) : 0.0}$</h4>
        </div>
        <div className="text-[18px]" onClick={moneyWithdraw}>
          [ Withdr ]
        </div>
        {/* <div className="flex w-full justify-between text-[22px] items-center max-small:text-[20px] font-['Turret-Road-Medium']"></div> */}
      </div>
      <div
        ref={ref}
        className="invest-balance px-[60px] flex items-center justify-center flex-col translate-y-[100px] opacity-0 relative z-10 max-xsmall:hidden"
      >
        <h3 className="text-[20px] max-small:text-[18px]">Balance</h3>
        <h4 className="text-[46px] max-small:text-[34px]">
          {balance ? balance.toFixed(2) : 0.0}$
        </h4>
        <div className="flex w-full justify-between text-[22px] items-center max-small:text-[20px] font-['Turret-Road-Medium']">
          <div onClick={moneyDeposit}>[ Deposit ]</div>
          <div onClick={moneyWithdraw}>[ Withdr ]</div>
        </div>
      </div>
    </>
  );
}
