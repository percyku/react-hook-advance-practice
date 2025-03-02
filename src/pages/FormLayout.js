import { React, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useReducer } from "react";
import { UserContext, userReducer, userInit } from "../store";

function FormLayout() {
  const reducer = useReducer(userReducer, userInit);

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
