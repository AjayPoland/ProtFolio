import React,{useContext} from 'react';
import Form from 'react-bootstrap/Form';

//styling bootsrtap css
import 'bootstrap/dist/css/bootstrap.min.css'

//external styling css
import '../../css/LoginMain.css'

import { context } from './LoginMain';
import { userContext } from "../MainLayoutOne";

function SingUp({handleSubmit,setInput,handleSignIn}) {

  const logMain=useContext(context);
  const contextInput = useContext(userContext);

  return (
    <div>
      <button
        className="frm-close text-dark p-0 m-0"
        onClick={() => contextInput.frmClose(false)}
      >
        close
      </button>
      <Form className="sing-admin text-start mx-2" onSubmit={(e)=>handleSubmit(e,"/singUp")}>
        <div className='my-1'>
        <Form.Label htmlFor='name' >Name:</Form.Label>
        <Form.Control ref={logMain.firstname} type='text' name='name' onChange={setInput} style={{marginBottom:"0"}} required/>
        </div>
        <div className='my-1'>
        <Form.Label htmlFor='email'>Email:</Form.Label>
        <Form.Control className="my-0" type="email" name='email' onChange={setInput} required/>
        </div>
        <div className='my-1'>
        <Form.Label htmlFor='username'>username:</Form.Label>
        <Form.Control className="my-0" type="text" name='username' onChange={setInput} required/>
        </div>
        <div className='my-1'>
        <Form.Label htmlFor='password'>password:</Form.Label>
        <Form.Control type="text" name='password' onChange={setInput} required/>
        </div>
        <div className="sing-admin-btn"
          >
            <button className="custom-singup-button btn" type="submit">
              sing up
            </button>
            <div></div>
            <button
              className="custom-singin-button btn fw-bold"
              onClick={()=>handleSignIn(true)}
            >
              sing in
            </button>
          <p className='mt-2'>Already have an account! <span className="badge text-bg-info" >Sing in</span></p>
          </div>
        </Form>
    </div>
  )
}

export default React.memo(SingUp);
