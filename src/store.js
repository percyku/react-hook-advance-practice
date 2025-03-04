import { createContext } from "react";

export const userInit = {
  username: "",
  password: "",
  role: "",
  sexual: "",
  brief: "",
};

// export const userInit = {
//   username: "percy",
//   password: "fun123",
//   role: "STUDENT",
//   sexual: "men",
//   brief: "Hi I'm test123",
// };

export const userRegister = [
  {
    username: "test123",
    password: "fun123",
    role: "STUDENT",
    sexual: "men",
    brief: "Hi I'm test123",
  },
  {
    username: "test321",
    password: "fun123",
    role: "INSTRUCTOR",
    sexual: "female",
    brief: "Hi I'm test321",
  },
  {
    username: "percy",
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
      // console.log(action.type, action.payload.update_id);
      // console.log(action.type, action.payload.update_user_data);
      userRegister[action.payload.update_id] = action.payload.update_user_data;
      return { ...userInit };
    default:
      return state;
  }
};

export const Roles = ["STUDENT", "INSTRUCTOR"];
export const UserContext = createContext({});
