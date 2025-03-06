import { React, useEffect, useRef, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useReducer } from "react";
import {
  UserContext,
  userReducer,
  userInit,
  getCurrentUser,
  setCurrentUser,
} from "../store";

function FormLayout() {
  console.log(getCurrentUser());
  if (getCurrentUser() == null) {
    setCurrentUser(userInit);
  }

  const reducer = useReducer(userReducer, getCurrentUser());

  return (
    <>
      <UserContext.Provider value={reducer}>
        <Navbar />

        <div className="container">
          <Outlet />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default FormLayout;
