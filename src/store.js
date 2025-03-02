import { createContext } from "react";

export const userInit = {
  username: "",
  password: "",
  role: "",
  sexual: "",
  brief: "",
};

export const userRegister = [
  {
    username: "test123",
    password: "fun123",
    role: "STUDENT",
    sexual: "men",
    brief: "Hi I'm test123",
  },
];

export const userReducer = (state, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return { ...userInit };
    case "REGISTER":
      userRegister.push({ ...action.payload });

      return { ...userInit };
    case "UPDATE_USER_DATA":
      //   userRegister.push({ ...action.payload });
      return { ...userInit };
    default:
      return state;
  }
};

export const Roles = ["STUDENT", "INSTRUCTOR"];
export const UserContext = createContext({});
