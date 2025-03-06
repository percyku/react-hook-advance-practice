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
        setCurrentUser({ ...state, ...action.payload.user_data });
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
