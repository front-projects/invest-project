import { useEffect } from "react";
import Stat from "../components/Stats/Stat";
import Title from "../components/UI/Title";
import gsap from "gsap";

export default function Stats() {
  const stats = [
    { amount: 900, type: "INCOME" },
    { amount: 900, type: "INCOME" },
    { amount: 700, type: "INCOME" },
    { amount: 900, type: "INCOME" },
    { amount: 900, type: "WITHDRAW" },
    { amount: 700, type: "INCOME" },
    { amount: 900, type: "INCOME" },
    { amount: 900, type: "WITHDRAW" },
  ];

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      ".stat-item",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1 },
    );
  }, []);

  return (
    <section className="h-full">
      <Title />
      <h3 className="w-full text-center py-2 text-[20px]">Stats</h3>

      <div
        style={{ height: "calc(100% - 142px)" }}
        className="w-full overflow-y-auto overflow-x-hidden px-[18px] py-2 flex flex-col gap-[10px] items-center"
      >
        {!stats || stats.length === 0 ? (
          <div>History is empty</div>
        ) : (
          stats.map((stat) => (
            <Stat key={stat.amount * Math.random() * 100} stat={stat} />
          ))
        )}
      </div>
    </section>
  );
}
