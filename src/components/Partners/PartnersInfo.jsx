import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function PartnersInfo() {
  const ref = useRef(null);
  useEffect(() => {
    const anim = gsap.to(ref.current, { translateY: 0, opacity: 1 });
    return () => anim.kill();
  }, []);

  return (
    <h3
      ref={ref}
      className="w-full text-center text-[20px] px-[40px] tracking-[-0.04rem] mb-[10px] translate-y-[-50px] opacity-0"
    >
      Receive up to 6% of profits from invited members
    </h3>
  );
}
