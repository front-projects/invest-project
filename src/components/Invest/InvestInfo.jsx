import ReactTypingEffect from "react-typing-effect";

export default function InvestInfo() {
  return (
    <div
      className="invest-info text-center text-[15px] invest-gradient px-[10%] 
       h-[90px] min-h-[90px]
      max-small:text-[13px] max-small:h-[78px] max-small:min-h-[78px]
      max-xsmall:text-[12px] max-xsmall:h-[60px] max-xsmall:min-h-[70px]"
    >
      <ReactTypingEffect
        eraseDelay={999999}
        speed={20}
        typingDelay={200}
        text="Invest cryptocurrencies to speed up the work of blockchain chains and get from 0.8 to 3.00% of net profit daily"
      />

      <ReactTypingEffect
        eraseDelay={999999}
        speed={20}
        typingDelay={3000}
        text="To activate the bot, top up your balance"
      />
    </div>
  );
}
