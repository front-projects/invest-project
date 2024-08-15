import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function PartnersTitle() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.to(ref.current, { translateX: 0, opacity: 1 });
  }, []);

  return (
    <h4
      ref={ref}
      className="text-[15px] px-[30px] mb-[10px] translate-x-[-50px] opacity-0"
    >
      100 friends
    </h4>
  );
}
