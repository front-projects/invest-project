import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function InvestBalance() {
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
        <div className="text-[18px]" onClick={() => alert("hi")}>
          [ Deposit ]
        </div>
        <div className="text-center">
          <h3 className="text-[20px] max-small:text-[16px]">Balance</h3>
          <h4 className="text-[26px]">122000.00$</h4>
        </div>
        <div className="text-[18px]">[ Withdr ]</div>
        {/* <div className="flex w-full justify-between text-[22px] items-center max-small:text-[20px] font-['Turret-Road-Medium']"></div> */}
      </div>
      <div
        ref={ref}
        className="invest-balance px-[60px] flex items-center justify-center flex-col translate-y-[100px] opacity-0 relative z-10 max-xsmall:hidden"
      >
        <h3 className="text-[20px] max-small:text-[18px]">Balance</h3>
        <h4 className="text-[46px] max-small:text-[34px]">1000.00$</h4>
        <div className="flex w-full justify-between text-[22px] items-center max-small:text-[20px] font-['Turret-Road-Medium']">
          <div>[ Deposit ]</div>
          <div onClick={() => alert("hi")}>[ Withdr ]</div>
        </div>
      </div>
    </>
  );
}
