import { FaUser } from "react-icons/fa";

export default function Partner({ partner }) {
  return (
    <div className="flex w-full justify-between items-center text-[20px] py-[15px] relative">
      <div className="flex items-center gap-4">
        <FaUser />
        {/* <img src="/stat.png" alt="" /> */}
        {partner.name}
      </div>
      <div>
        {partner.balanceAmount ? partner.balanceAmount.toFixed(2) : "0.00"}$
      </div>
      <div className="bg-white h-[1px] top-full absolute w-[100%] right-0"></div>
    </div>
  );
}
