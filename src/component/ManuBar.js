import React,{useContext} from 'react'
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import "../css/ManuBar.css";

import { userContext } from './MainLayoutOne';

function ManuBar({triger}) {
  const contextInput=useContext(userContext);
  console.log('menuBar')

  const logIn=()=>{
    if(!contextInput.logBtn.status){
      return(
        <button className='btn-admin' onClick={()=>triger(true)} >{contextInput.logBtn.value}</button>
      )
    }
  }
  const logOut=()=>{
  if(contextInput.logBtn.status)
  {
    return(
      <div className="d-flex btn-admin align-content-center align-items-center">
      <DropdownButton variant="none" className="logged_In" title={contextInput.logBtn.value}>
        <Dropdown.Item className="log_out text-center" onClick={contextInput.logOut}>Log Out</Dropdown.Item>
      </DropdownButton>
      </div>
    )
  }
  }

  return (
  <Row className='manu-bar'>
    <Col sm={8}>
    <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="Home" onClick={()=>contextInput.testhandle(contextInput.home)}>
              Home
            </Nav.Link>
            {/* <Nav.Link eventKey="Home" onClick={()=>contextInput.testhandle(contextInput.home)}>
              Home
            </Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="protfolio" onClick={()=>contextInput.testhandle2(contextInput.about)} title="protfolio">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="resume" onClick={()=>contextInput.scrollhandle(contextInput.resume)} title="resume">
              Resume
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="prjects" onClick={()=>contextInput.scrollhandle(contextInput.project)} title="projects">
              {" "}
              Project
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contect" onClick={()=>contextInput.testhandle2(contextInput.contact)} title="contect">
              {" "}
              Contect
            </Nav.Link>
          </Nav.Item>
          </Nav>
    </Col>
    <Col className='btn-admin-col' sm={4}>
    {logIn()}
    {logOut()}
    </Col>
    </Row>
  );
}

export const MemoizedManuBar = React.memo(ManuBar);


