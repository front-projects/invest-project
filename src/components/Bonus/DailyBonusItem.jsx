const DailyBonusItem = ({ price, locked }) => {
  return (
    <div className="relative max-w-[84px] w-[84px] h-[84px]">
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-[#37C100] text-[14px] whitespace-nowrap ${locked ? "opacity-[.4]" : ""}`}
      >
        {price} USD
      </div>
      <img
        src="./images/cash-big.png"
        alt="cash"
        className={`${locked ? "opacity-[.4]" : ""}`}
      />
      {locked && (
        <div className="absolute flex items-center justify-center w-full h-full z-2 inset-0">
          <img src="./images/locked.png" alt="" />
        </div>
      )}
    </div>
  );
};

export default DailyBonusItem;