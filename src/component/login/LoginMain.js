import React, { useState, useRef, useEffect,useContext } from "react";
import axios from "axios";

import { userContext } from "../MainLayoutOne";

//styling bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import { MemoizedSingIn } from "./SingIn";
import SingUp from "./SingUp";

//external styling.
import "../../css/LoginMain.css";

export const context = React.createContext();
const ContextProvider = context.Provider;

axios.defaults.withCredentials = true;

function LoginMain() {
  console.log("login main");

  const contextInput = useContext(userContext);

  const [isSingIn, setIsSingIn] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [userData, setUserData] = useState();

  const username = useRef();
  const firstname = useRef();

  useEffect(() => {
    isSingIn ? username.current.focus() : firstname.current.focus();
  }, []);

  const setSingInInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]:(value) }));
  };
  const singIn = async (e,url,triger) => {
    axios
      .post(
        url,
        { ...userInfo},
        {
          "content-type": "application/json",
          "Accept": "application/json",
        }
      )
      .then((res) => {
        if(res.data.success){
        alert(res.data.success);
        contextInput.changeLogBtn({status:true,value:"Logged In"})
        contextInput.frmClose(triger)
        }
        else if(res.data.error){
          alert (res.data.error);
          //to clear the input field.
          Array.from(e.target).forEach((ev) => (ev.value = ""));
        }
      })
      .catch((err) => {
        console.log(err);
      });
      e.preventDefault();
  };
  const setSingUpInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const singUp = async (e,url) => {
    axios
      .post(
        url,
        { ...userData},
        {
          "content-type": "application/json",
          "Accept": "application/json",
        }
      )
      .then((res) => {
        alert(res.data);
        //to clear the input field.
        Array.from(e.target).forEach((ev) => (ev.value = ""));
      })
      .catch((err) => {
        console.log(err);
      });
      e.preventDefault();
  };

  const handleSignIn = (isSingBool) => {
    console.log("heello");
    setIsSingIn(isSingBool);
  };

  const singin = () => {
    if (isSingIn) {
      return (
        <MemoizedSingIn
          setInput={setSingInInput}
          handleSubmit={singIn}
          handleSignIn={handleSignIn}
        />
      );
    }
  };
  const singup = () => {
    if (!isSingIn) {
      return (
        <SingUp
          setInput={setSingUpInput}
          handleSubmit={singUp}
          handleSignIn={handleSignIn}
        />
      );
    }
  };

  return (
    <ContextProvider
      value={{ username: username, firstname: firstname,}}
    >
      <div className="login-main card" style={{ width: "25vw" }}>
        {singin()}
        {singup()}
      </div>
    </ContextProvider>
  );
}

export const MemoizedLoginMain = React.memo(LoginMain);
