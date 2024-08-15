import InvestBalance from "../components/Invest/InvestBalance";
import InvestInfo from "../components/Invest/InvestInfo";
import InvestVideo from "../components/Invest/InvestVideo";
import Star from "../components/UI/Star";
import Title from "../components/UI/Title";

export default function Invest() {
  return (
    <section className="w-full h-full">
      <Title />
      <Star />
      <div
        style={{ height: "calc(100% - 150px)" }}
        className="flex flex-col gap-2 overflow-y-auto justify-between overflow-x-hidden"
      >
        <InvestInfo />
        <InvestVideo />
        <InvestBalance />
        <div className="fixed w-[119px] h-[119px] bg-[#A4A4A4] blur-[64.7px] max-xsmall:top-[200px] max-small:top-[310px] top-[410px] left-[-20px] rounded-[50%] z-10"></div>
        <div className="fixed w-[142px] h-[142px] bg-[#A4A4A4] blur-[64.7px] max-xsmall:top-[160px] top-[240px] right-[-48px] rounded-[50%] z-10"></div>
        <div className="fixed w-[178px] h-[178px] bg-[#A4A4A4] blur-[64.7px] bottom-[-120px] right-0 rounded-[50%] z-10"></div>
      </div>
    </section>
  );
}
