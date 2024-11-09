// import axios from "axios";

// const URL = "https://blockcreater.com:6054/"; // TEST
// const URL = "https://footballearn.site:6044/"; //PROD

export const getAllPlayers = async () => {
  return [
    {
      name: "Player One",
      price: 1000,
      value: 15.5,
      photo: "./images/person/1.png",
    },
    {
      name: "Player Two",
      price: 2000,
      value: 20,
      photo: "./images/person/2.png",
    },
    {
      name: "Player Three",
      price: 1500,
      value: 18.7,
      photo: "./images/person/3.png",
    },
    {
      name: "Player Four",
      price: 1000,
      value: 15.5,
      photo: "./images/person/4.png",
    },
    {
      name: "Player Five",
      price: 2000,
      value: 20,
      photo: "./images/person/5.png",
    },
    {
      name: "Player Fifth",
      price: 1500,
      value: 18.7,
      photo: "./images/person/6.png",
    },
  ];
};

export const getAllBalls = async () => {
  return [
    {
      name: "Test",
      price: 100,
      photo: "./images/ball/1.png",
    },
    {
      name: "Test",
      price: 100,
      photo: "./images/ball/2.png",
    },
    {
      name: "Test",
      price: 100,
      photo: "./images/ball/3.png",
    },
    {
      name: "Test",
      price: 100,
      photo: "./images/ball/4.png",
    },
    {
      name: "Test",
      price: 100,
      photo: "./images/ball/5.png",
    },
    {
      name: "Test",
      price: 100,
      photo: "./images/ball/6.png",
    },
  ];
};

export const getListUsers = async () => {
  return {
    balance: 0,
    poolUserDtoList: [
      {
        amount: 0,
        nameSurname: "1",
        photo: "string",
      },
      {
        amount: 100,
        nameSurname: "2",
        photo: "string",
      },
      {
        amount: 0,
        nameSurname: "3",
        photo: "string",
      },
      {
        amount: 0,
        nameSurname: "4",
        photo: "string",
      },
      {
        amount: 0,
        nameSurname: "5",
        photo: "string",
      },
      {
        amount: 0,
        nameSurname: "6",
        photo: "string",
      },
      {
        amount: 100,
        nameSurname: "7",
        photo: "string",
      },
      {
        amount: 0,
        nameSurname: "8",
        photo: "string",
      },
      {
        amount: 0,
        nameSurname: "9",
        photo: "string",
      },
      {
        amount: 0,
        nameSurname: "10",
        photo: "string",
      },
    ],
  };
};

export const getHistory = async () => {
  return [
    {
      name: "Test name",
      type: "minus",
      price: 14,
    },
    {
      name: "Test name",
      type: "minus",
      price: 14,
    },
    {
      name: "Test name",
      type: "minus",
      price: 14,
    },
    {
      name: "Test name",
      type: "minus",
      price: 14,
    },
    {
      name: "Test name",
      type: "minus",
      price: 14,
    },
    {
      name: "Test name",
      type: "minus",
      price: 14,
    },
    {
      name: "Test name",
      type: "minus",
      price: 14,
    },
    {
      name: "Test name",
      type: "minus",
      price: 14,
    },
    {
      name: "Test name",
      type: "minus",
      price: 14,
    },
    {
      name: "Test name",
      type: "minus",
      price: 14,
    },
    {
      name: "Test name",
      type: "minus",
      price: 14,
    },
    {
      name: "Test name",
      type: "minus",
      price: 14,
    },
  ];
};
