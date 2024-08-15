import { useEffect, useRef, useState } from "react";
import { CopyIcon } from "../UI/icons";
import CopyToClipboard from "react-copy-to-clipboard";
import WebApp from "@twa-dev/sdk";
import gsap from "gsap";

export default function CopyUrl() {
  const urlRef = useRef(null);

  const [copied, setCopied] = useState(false);
  const url = "t.me/sdfdsfkdskfdkfsdfsdfdasdasdasdasdasdasdasdasddsf";

  useEffect(() => {
    const textAnim = gsap.timeline();

    textAnim
      .to(urlRef.current, { width: "50%", opacity: 1 })
      .to(".copy-icon", { opacity: 1 });
    return () => textAnim.kill();
  }, []);

  return (
    <CopyToClipboard text={url}>
      <div
        className="w-full text-center text-[15px] flex items-center justify-center gap-4 overflow-hidden py-2 border-b-[1px] border-[#FFFFFF33]"
        onClick={() => {
          WebApp.HapticFeedback.impactOccurred("medium");
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 3000);
        }}
      >
        <p className="text-[30px]">[ </p>

        <h3 className="copy-gradient max-w-[50%] w-0 opacity-0" ref={urlRef}>
          {url}
        </h3>
        <p className="copy-icon opacity-0">
          {copied ? "Copied" : <CopyIcon />}
        </p>

        <p className="text-[30px]"> ]</p>
      </div>
    </CopyToClipboard>
  );
}
