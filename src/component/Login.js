import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

// react bootstrap css.
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  console.log('login');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div style={{width:'350px'}}>
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="container flex-wrap"
    >
      <Form.Group as={Row} className="mb-3" controlId="validationCustom01">
        <Form.Label column sm="3">
          UserName:
        </Form.Label>
        <Col sm="9">
          <Form.Control required type="text" placeholder="First name" defaultValue=""/>
        </Col>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="validationCustom02">
        <Form.Label column sm="3">
          Password:
        </Form.Label>
        <Col sm="9">
          <Form.Control required type="password" placeholder="Password" />
        </Col>
        <Form.Control.Feedback type="invalid">
          Please provide the password.
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" variant="success">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default React.memo(Login);
