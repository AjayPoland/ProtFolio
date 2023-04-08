import React, { useState, useEffect, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

import "../css/MainLayoutOne.css";

import {MemoizedManuBar} from "./ManuBar";
import {MemoizedLoginMain} from "./login/LoginMain";
import {MemoizedProfilePic} from "./ProfilePic";
import Welcome, {MemoizedWelcome} from "./Welcome";
import {MemoizedAbout} from "./About";
import {MemoizedResume} from "./Resume";
import {MemoizedProject} from "./Project";
import {MemoizedContect} from "./Contect";
import Contect from "./Contect"

export const userContext = React.createContext();
const ContextProvider = userContext.Provider;

function MainLayoutOne() {
  console.log("Main Page.")
  const [logTriger, setLogTriger] = useState(false);
  const [logBtn,setLogBtn]=useState({status:false,value:"Log In"})
  const home = useRef();
  const about = useRef();
  const resume = useRef();
  const project = useRef();
  const contact = useRef();
  console.log(logBtn);

  const logOut=()=>{
    axios.post("/logOut")
    .then(res=>{
      alert(res.data.user);
      setLogBtn({status:false,value:"log In"})
    })
    .catch(err=>{
      console.log(err);
    })
    //alert ("working on it! Sorry \n dealing with deleting session");
    //setLogBtn({status:false,value:"log In"});
    // let decodedCookie = decodeURIComponent(document.cookie);
    // console.log(decodedCookie);
  }

  useEffect(() => {
    axios.get("/singIn")
    .then(res=>{
      if(res.data.loggedIn){
        setLogBtn({status:true,value:"Logged In"})
      }
      console.log(res)
    });
  }, []);

  function testhandle(arg) {
    console.log(arg.current.id);
    arg.current.scrollIntoView({block:"end",inline:"nearest", behavior: "smooth" });
  }
  
  function testhandle2(arg) {
    console.log(arg);
    arg.current.scrollIntoView({block:"center",inline:"nearest", behavior: "smooth" });
  }

  function scrollhandle(arg){
    arg.current.scrollIntoView({block:"start", behavior: "smooth" });
  }

  return (
    <ContextProvider
      value={{
        logBtn:logBtn,
        changeLogBtn:setLogBtn,
        frmClose: setLogTriger,
        testhandle: testhandle,
        testhandle2: testhandle2,
        scrollhandle:scrollhandle,
        logOut:logOut,
        home:home,
        about: about,
        resume: resume,
        project: project,
        contact: contact,
      }}
    >
      <div className="body pt-4">
        <div className="login-form">{logTriger ? <MemoizedLoginMain /> : null} </div>
        <Row className="manu-bar">
          <Col className="p-0">
            <MemoizedManuBar triger={setLogTriger} />
          </Col>
        </Row>
        <Row className="home-page">
          <div className="profile">
            <MemoizedProfilePic />
          </div>
          <div ref={home} className="welcome">
            <MemoizedWelcome/>
            {/* <Welcome/> */}
          </div>
        </Row>
        <Row className="contain">
          <Col ref={about} className="p-0">
            <MemoizedAbout />
          </Col>
        </Row>
        <Row className="contain">
          <Col ref={resume} className="p-0">
            <MemoizedResume />
          </Col>
        </Row>
        <Row className="contain">
          <Col ref={project} className="p-0">
            <MemoizedProject />
          </Col>
        </Row>
        <Row className="contain">
          <Col ref={contact} className="p-0">
            {/* <Contect/> */}
            <MemoizedContect />
          </Col>
        </Row>
      </div>
    </ContextProvider>
  );
}
export default React.memo(MainLayoutOne);