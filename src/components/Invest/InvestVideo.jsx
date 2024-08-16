import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function InvestVideo() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.to(ref.current, { opacity: 1, duration: 2 });
  }, []);

  return (
    <div
      className="w-screen min-h-[210px] relative opacity-0 bg-transparent max-xsmall:min-h-[190px]"
      ref={ref}
    >
      <div className="absolute bottom-[-1px] h-[90px] w-full bottom-bg z-10 "></div>
      <div className="absolute top-[-1px] h-[73px] w-full top-bg z-10 "></div>

      {/* <video
        autoPlay
        muted
        loop
        className="absolute h-[210px] w-screen inset-0 object-cover"
      >
        <source src="./main-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video> */}
      <img
        src="./main-video.gif"
        alt=""
        className="w-screen h-[210px] min-h-[210px] max-xsmall:min-h-[190px] max-xsmall:h-[190px]"
      />
    </div>
  );
}
