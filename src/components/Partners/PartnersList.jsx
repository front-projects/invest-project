import { useEffect, useRef } from "react";
import Partner from "./Partner";
import gsap from "gsap";
import { useSelector } from "react-redux";

export default function PartnersList() {
  const partners = useSelector((state) => state.user.info.bottomRefferals);

  const ref = useRef(null);
  useEffect(() => {
    gsap.to(ref.current, { translateY: 0, opacity: 1 });
  }, []);

  return (
    <div
      ref={ref}
      style={{ height: "calc(100% - 322px)" }}
      className="mx-[18px] partners-bg overflow-y-auto px-[20px] pb-[15px] translate-y-[100px] opacity-0"
    >
      {!partners || partners.length == 0 ? (
        <div className="flex items-center justify-center mt-14 text-2xl">
          No refferal friends
        </div>
      ) : (
        partners.map((partner) => (
          <Partner
            key={partner.amount + Math.random() * 1000}
            partner={partner}
          />
        ))
      )}
    </div>
  );
}
