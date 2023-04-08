import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

//image
import myPic from "../../images/mypic.jpg";

//styling bootsrtap css
import "bootstrap/dist/css/bootstrap.min.css";

//external styling css
import "../../css/LoginMain.css";

//context importing
import { userContext } from "../MainLayoutOne";
import { context } from "./LoginMain";

function SingIn({ setInput, handleSubmit, handleSignIn }) {
  const logMain = useContext(context);
  const contextInput = useContext(userContext);
  return (
    <>
      <button
        className="frm-close text-dark p-0 m-0"
        onClick={() => contextInput.frmClose(false)}
      >
        close
      </button>
      <Card className="singin-card border-0 align-items-start">
        <Card.Img src={myPic} className=" singin-logo rounded-circle" />
      </Card>
      <Form className="sing-admin text-start mx-2" onSubmit={(e) => handleSubmit(e,"/signIn",false)}>
        <div className="my-2">
          <Form.Label htmlFor="username">UserName:</Form.Label>
          <Form.Control
            ref={logMain.username}
            type="text"
            name="username"
            onChange={setInput}
            required
          />
        </div>
        <div className="my-2">
          <Form.Label htmlFor="password">Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={setInput}
            required
          />
        </div>
        <div className="sing-admin-btn">
          <button
            className="custom-singin-button btn"
            type="submit"
          >
            sing in
          </button>
          <button
            className="custom-singup-button btn"
            onClick={() => handleSignIn(false)}
          >
            Sing up
          </button>
          <p className="mt-2">
            Don't have an account!{" "}
            <span className="badge text-bg-secondary">Sing up</span>
          </p>
        </div>
      </Form>
    </>
  );
}

export const MemoizedSingIn = React.memo(SingIn);
