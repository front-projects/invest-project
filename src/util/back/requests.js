// import axios from "axios";

// const URL = "https://utilitywhalefederation.site:6034/"; // TEST
// const URL = "https://utilitywhalefederation.site:6044/"; // PROD
// const URL = "http://localhost:6028/";
// export const PAYMENT_URL = "https://checkout.utilitywhalefederation.site/";
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
