import { ArrowDown, ArrowUp, StatBg } from "../UI/icons";

export default function Stat({ stat }) {
  return (
    <div className="flex w-[354px] relative min-h-[67px] max-sm:w-[100vw] stat-item opacity-0 translate-y-[100px]">
      <div className="absolute inset-0 w-full h-full">
        <StatBg />
      </div>
      <div className="absolute w-full h-full flex items-center justify-between px-[20px] text-[20px]">
        {/* <img src="/stat.png" alt="" /> */}
        <div className="text-[12px]">{stat.description}</div>

        <div
          className={`flex gap-2 items-center ${(stat.transactionType == "INCOME" || stat.transactionType == "DEPOSIT")  ? "text-green-300" : "text-red-300"}`}
        >
          {(stat.transactionType == "INCOME" || stat.transactionType == "DEPOSIT")  ? <ArrowUp /> : <ArrowDown />}
          {stat.transactionAmount.toFixed(2)}$
        </div>
      </div>
    </div>
  );
}
