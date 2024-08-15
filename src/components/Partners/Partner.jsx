export default function Partner({ partner }) {
  return (
    <div className="flex w-full justify-between items-center text-[20px] py-[15px] relative">
      <div className="flex items-center gap-6">
        <img src="/stat.png" alt="" />
        {partner.name}
      </div>
      <div>{partner.amount.toFixed(2)}$</div>
      <div className="bg-white h-[1px] top-full absolute w-[90%] right-0"></div>
    </div>
  );
}
