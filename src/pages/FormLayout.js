import { React, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Modal } from "bootstrap";
import Navbar from "../components/Navbar";
import EditModal from "../components/EditModal";
import Profile from "./Profile";

function FormLayout() {
  const myModal = useRef(null);
  const profileModalRef = useRef(null);
  const [userData, setUserData] = useState({
    username: "example@gmail.com",
    password: "fun123",
    role: "STUDENT",
    sexual: "men",
  });
  // const profileModal = useRef(null);

  useEffect(() => {
    myModal.current = new Modal(profileModalRef.current, {
      backdrop: "static",
    });
    //profileModal.current = new Modal("#EditModalId", { backdrop: "static" });
  });

  const openProfileModal = () => {
    myModal.current.show();
    // profileModal.current.show();
  };

  const closeProfileModal = () => {
    console.log("closeProfileModal");
    console.log("userData", userData);
    myModal.current.hide();
    // profileModal.current.hide();
  };

  // const saveProfileModal = async (data) => {
  //   console.log("submit", data);
  // };

  return (
    <>
      <Navbar openModal={openProfileModal} />
      {/* <h1>{userData.username}</h1>
      <h1>{userData.password}</h1>
      <h1>{userData.sexual}</h1>
      <h1>{userData.role}</h1> */}
      <EditModal
        // id={"profileId"}
        modalRef={profileModalRef}
        modalTitle={"修改個人資料"}
        closeModal={closeProfileModal}
        footer="false"
        otherComponent={
          <Profile
            userData={userData}
            setUserData={setUserData}
            closeProfileModal={closeProfileModal}
          />
        }
      />

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default FormLayout;
