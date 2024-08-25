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
        className="w-full flex flex-col px-[18px] text-[16px] gap-2 overflow-y-auto text-justify translate-y-[200px] opacity-0"
        style={{ height: "calc(100% - 160px)" }}
      >
        <p>
          Welcome. We ask that you read this text from start to finish to
          understand the rules of the project and to get the best results. Thank
          you.
        </p>
        <h3 className="text-white/50 my-4 text-2xl">How the project works:</h3>
        <p>
          The bot is directly connected to the major mining servers, and is a
          platform for new people to participate in the processing of stuck
          transactions on various cryptocurrency networks. The bot uses your
          funds to push stalled transactions through the network so they can
          instantly go through To get started just make a deposit of any amount
          not less than $20. To do this, click the ‘Deposit’ button and top up
          your balance with cryptocurrency. Then your funds will be
          automatically displayed on the balance and they will be immediately
          used to accelerate transactions, for this you get from 0.8% to 3%
          every day from the amount of the original deposit. If you don&apos;t
          have cryptocurrency or don&apos;t know how to do it, close the game
          and find the tutorial article in the start menu of the bot.
        </p>
        <h3 className="text-white/50 my-4 text-2xl">
          Examples of profit with a deposit of $500:
        </h3>
        <div className="flex flex-col gap-2">
          <p>Your deposit 500 USDT</p>
          <p>
            When replenishing, our commission will be 10%, which means that your
            balance will be credited 450 USDT
          </p>
          <ul className="text-center">
            <li>1 day - 464 USDT</li>
            <li>2 day - 476 USDT</li>
            <li>3 day - 489 USDT</li>
            <li>4 day - 502 USDT</li>
            <li>5 day - 513 USDT</li>
            <li>6 day - 529 USDT</li>
            <li>7 day - 543 USDT</li>
            <li>8 day - 557 USDT</li>
            <li>9 day - 569 USDT</li>
            <li>10 day - 584 USDT</li>
          </ul>
          <p>
            584 USDT will be available for withdrawal. The commission is 10%,{" "}
          </p>
          <p>
            526 USDT will be credited to your balance, taking into account all
            commissions.
          </p>
          <p>
            Accordingly, the longer you let the bot work without stopping, the
            higher your profit will be
          </p>
        </div>
        <h3 className="text-white/50 my-4 text-2xl">Basic concepts:</h3>
        <ul className="flex flex-col gap-2">
          <li>- A bot starts working as soon as it has a balance on it.</li>
          <li>
            - Profits are credited every 24 hours in the amount from 0.8% to 3%
            of the deposit amount.
          </li>
          <li>- Deposit confirmation takes up to 5 minutes maximum.</li>
          <li>
            - Withdrawal of funds on average takes 1 hour, but not more than 24
            hours.
          </li>
          <li>
            - The investment period is unlimited, you can use the bot as long as
            you want.
          </li>
          <li>- You can make a withdrawal at any time.</li>
        </ul>
        <h3 className="text-white/50 my-4 text-2xl">Referral system:</h3>
        <p>
          Each invited person through your referral link brings you 4% of their
          profits. In addition, if your friends start inviting other users, you
          will also get 2% of their profits.
        </p>
        <p>This is not necessary in order to get a daily profit percentage. </p>
        <p>
          However, this way you will be able to increase your income. The more
          users you invite, the more passive income you can get.
        </p>
        <p className="mt-6 pb-4">
          If you have any questions, write to the general chat or to the support
          team.
        </p>
      </div>
    </section>
  );
}
