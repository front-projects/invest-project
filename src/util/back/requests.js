import axios from "axios";

// const URL = "https://utilitywhalefederation.site:6034/"; // TEST
const URL = "https://utilitywhalefederation.site:6044/"; // PROD
// const URL = "http://localhost:6028/";
export const PAYMENT_URL = "https://checkout.utilitywhalefederation.site/";
// export const PAYMENT_URL = "https://lottery-payment.vercel.app/";

// export const getToken = async ({ login, password }) => {
//   const authHeader = "Basic " + btoa(`${login}:${password}`);

//   try {
//     const response = await axios.post(
//       URL + "api/auth/token",
//       {},
//       {
//         headers: {
//           Authorization: authHeader,
//         },
//       },
//     );
//     return response.data.accessToken;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const getUserInfo = async (token) => {
//   try {
//     const response = await axios.get(URL + "api/users/by-token", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const getTopUsers = async (token) => {
//   try {
//     const response = await axios.get(URL + "api/users/top ", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const buyLottery = async (token, lottery) => {
//   try {
//     const response = await axios.patch(
//       URL + "api/tables",
//       {
//         investModelLevel: lottery,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       },
//     );
//     if (response.status == 200) {
//       return true;
//     }
//   } catch (error) {
//     return false;
//   }
// };

//
export const getToken = async () => {
  return "test";
};
function delayedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Проміс виконано через 2 секунди");
    }, 1500);
  });
}

export const getUserInfo = async () => {
  await delayedPromise();
  return {
    id: 3,
    login: "u1",
    name: "Name Test1",
    username: "u1",
    reflink: null,
    balanceAmount: 100,
    investModels: [
      {
        id: 11,
        naming: "Private",
        priceAmount: 10,
        trendingStatus: "MEDIUM",
        partnerBonusAmount: 0,
        mainBonusAmount: 0,
        lostRefIncomeAmount: 0,
        totalPrizeAmount: 0,
        investModelStatus: "BOUGHT",
        investModelLevel: "LEVEL_1",
        unlockDate: null,
        createdAt: "2024-07-24T17:58:46.874446",
      },
      {
        id: 12,
        naming: "Lvl 1",
        priceAmount: 200,
        trendingStatus: "MEDIUM",
        partnerBonusAmount: 0,
        mainBonusAmount: 0,
        lostRefIncomeAmount: 0,
        totalPrizeAmount: 0,
        investModelStatus: "LOCKED",
        investModelLevel: "LEVEL_2",
        unlockDate: null,
        createdAt: "2024-07-24T17:58:46.98856",
      },
      {
        id: 13,
        naming: "Lvl 2",
        priceAmount: 170,
        trendingStatus: "MEDIUM",
        partnerBonusAmount: 0,
        mainBonusAmount: 0,
        lostRefIncomeAmount: 0,
        totalPrizeAmount: 0,
        investModelStatus: "LOCKED",
        investModelLevel: "LEVEL_3",
        unlockDate: null,
        createdAt: "2024-07-24T17:58:47.106525",
      },
      {
        id: 14,
        naming: "Lvl 3",
        priceAmount: 130,
        trendingStatus: "MEDIUM",
        partnerBonusAmount: 0,
        mainBonusAmount: 110,
        lostRefIncomeAmount: 0,
        totalPrizeAmount: 11000,
        investModelStatus: "LOCKED",
        investModelLevel: "LEVEL_4",
        unlockDate: null,
        createdAt: "2024-07-24T17:58:47.21934",
      },
      {
        id: 15,
        naming: "Lvl 4",
        priceAmount: 110,
        trendingStatus: "MEDIUM",
        partnerBonusAmount: 0,
        mainBonusAmount: 0,
        lostRefIncomeAmount: 0,
        totalPrizeAmount: 0,
        investModelStatus: "LOCKED",
        investModelLevel: "LEVEL_5",
        unlockDate: null,
        createdAt: "2024-07-24T17:58:47.346111",
      },
    ],
    transactions: [
      {
        transactionAmount: 0.01,
        description: "Encouraging bonus",
        transactionType: "INCOME",
        incomeType: "ADMIN",
        createdAt: "2024-07-24T17:58:47.836026",
      },
    ],
  };
};
