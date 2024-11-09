import { useEffect, useRef, useState } from "react";
import { getListUsers } from "../../../util/back/requests";
import WalletListItem from "./WalletListItem";

const WalletList = () => {
  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [activeSection, setActiveSection] = useState(0);
  const [activeList, setActiveList] = useState();
  const divRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getListUsers();
        setList(response.poolUserDtoList);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (activeSection >= 10) {
      setActiveSection(0);
    }

    const interval = setInterval(() => {
      const updArr = [...activeList];
      updArr.pop();
      updArr.unshift(list[activeSection]);
      setActiveSection((prev) => prev + Math.floor(Math.random() * 3));
      setActiveList(updArr);
    }, 300000);
    return () => clearInterval(interval);
  }, [activeList, list, activeSection]);

  useEffect(() => {
    if (divRef.current) {
      setActiveList(
        list?.slice(0, Math.floor((divRef.current.offsetHeight - 28) / 68)),
      );
      setActiveSection(Math.floor((divRef.current.offsetHeight - 28) / 68));
    }
  }, [isLoading, error, list]);

  return isLoading ? (
    <div className="w-full h-full flex items-center justify-center text-3xl">
      Loading...
    </div>
  ) : error ? (
    <div className="w-full h-full flex items-center justify-center text-2xl text-red-500">
      Error loading users
    </div>
  ) : (
    <div
      className="w-full h-full py-[14px] flex flex-col gap-[5px]"
      ref={divRef}
    >
      {activeList?.map((item, index) => (
        <WalletListItem key={index} data={item} />
      ))}
    </div>
  );
};

export default WalletList;
