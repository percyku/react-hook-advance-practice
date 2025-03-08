import { createContext } from "react";

export const userInit = {
  username:
    `${process.env.REACT_APP_USERNAME}` !== "undefined"
      ? `${process.env.REACT_APP_USERNAME}`
      : "",
  password:
    `${process.env.REACT_APP_PASSWORD}` !== "undefined"
      ? `${process.env.REACT_APP_PASSWORD}`
      : "",
  role:
    `${process.env.REACT_APP_ROLE}` !== "undefined"
      ? `${process.env.REACT_APP_ROLE}`
      : "",
  sexual:
    `${process.env.REACT_APP_SEXUAL}` !== "undefined"
      ? `${process.env.REACT_APP_SEXUAL}`
      : "",
  brief:
    `${process.env.REACT_APP_BRIEF}` !== "undefined"
      ? `${process.env.REACT_APP_BRIEF}`
      : "",
  accessKey:
    `${process.env.REACT_APP_ACCESSKEY}` !== "undefined"
      ? `${process.env.REACT_APP_ACCESSKEY}`
      : "",
};

export const userRegister = [
  {
    username: "test123",
    password: "fun123",
    role: "STUDENT",
    sexual: "men",
    brief: "Hi I'm test123",
    accessKey: "",
  },
  {
    username: "test321",
    password: "fun123",
    role: "INSTRUCTOR",
    sexual: "female",
    brief: "Hi I'm test321",
    accessKey: "",
  },
  {
    username: "percy",
    password: "fun123",
    role: "STUDENT",
    sexual: "men",
    brief: "Hi I'm percy",
    accessKey: "GAvxZ9VesndxTx_9NftqgOtZffnTB0YhfGiWGDJA-bs",
  },
];

export const Roles = ["STUDENT", "INSTRUCTOR"];

export const setCurrentUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const getCurrentUser = () => JSON.parse(localStorage.getItem("user"));

export const userReducer = (state, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case "LOGIN":
      if (action.payload.isSaving) {
        console.log("saving setCurrentUser");
        setCurrentUser({ ...state, ...action.payload.user_data });
      } else {
        console.log("not saving setCurrentUser");
      }
      return { ...state, ...action.payload.user_data };
    case "LOGOUT":
      if (action.payload.update_id === -1) {
        userRegister.push(getCurrentUser());
      }
      setCurrentUser(null);

      return { ...userInit };
    case "REGISTER":
      userRegister.push({ ...action.payload });
      return { ...userInit };
    case "UPDATE_USER_DATA":
      setCurrentUser(null);
      userRegister[action.payload.update_id] = action.payload.update_user_data;
      return { ...userInit };
    default:
      return state;
  }
};

export const UserContext = createContext({});
