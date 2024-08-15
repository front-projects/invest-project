import { ArrowDown, ArrowUp, StatBg } from "../UI/icons";

export default function Stat({ stat }) {
  return (
    <div className="flex w-[354px] relative min-h-[67px] max-sm:w-[100vw] stat-item opacity-0 translate-y-[100px]">
      <div className="absolute inset-0 w-full h-full">
        <StatBg />
      </div>
      <div className="absolute w-full h-full flex items-center justify-between px-[20px] text-[20px]">
        <img src="/stat.png" alt="" />
        <div>Nick Name</div>
        {stat.type !== "WITHDRAW" ? <ArrowUp /> : <ArrowDown />}
        <div>{stat.amount.toFixed(2)}$</div>
      </div>
    </div>
  );
}
