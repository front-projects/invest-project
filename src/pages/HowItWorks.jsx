import { Link } from "react-router-dom";
import Star from "../components/UI/Star";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import WebApp from "@twa-dev/sdk";

export default function HowItWorks() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.to(ref.current, { translateY: 0, opacity: 1 });
  }, []);

  return (
    <section className="h-full">
      <Link
        to="/menu/invest"
        onClick={() => WebApp.HapticFeedback.impactOccurred("soft")}
      >
        <h1 className="w-full text-center text-[30px] py-[15px] border-b-[1px] border-[#FFFFFF33] max-small:text-[24px] max-small:py-[8px]">
          [ Back to Home ]
        </h1>
      </Link>
      <Star />
      <div
        ref={ref}
        className="w-full flex flex-col px-[10%] text-[15px] gap-2 overflow-y-auto text-justify translate-y-[200px] opacity-0"
        style={{ height: "calc(100% - 160px)" }}
      >
        <h3 className="text-white/50 ">Step 01</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor
        </p>
        <h3 className="text-white/50 ">Step 02</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor
        </p>
        <h3 className="text-white/50 ">Step 03</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor
        </p>
      </div>
    </section>
  );
}
