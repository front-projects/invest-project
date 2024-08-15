import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function InvestBalance() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.to(ref.current, { translateY: 0, opacity: 1 });
  }, []);

  return (
    <div
      ref={ref}
      className="invest-balance px-[60px] flex items-center justify-center flex-col translate-y-[100px] opacity-0"
    >
      <h3 className="text-[20px] max-small:text-[18px]">Balance</h3>
      <h4 className="text-[46px] max-small:text-[34px]">1000.00$</h4>
      <div className="flex w-full justify-between text-[22px] items-center max-small:text-[20px] font-['Turret-Road-Medium']">
        <div>[ Deposit ]</div>
        <div onClick={() => alert("hi")}>[ Withdr ]</div>
      </div>
    </div>
  );
}
