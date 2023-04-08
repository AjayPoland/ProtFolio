import React,{useContext} from "react";

//styling bootstrap css.
import "bootstrap/dist/css/bootstrap.min.css";

import '../css/welcome.css';
// import { userContext } from "./MainLayoutOne";
function Welcome() {
  // const contextInput=useContext(userContext);
  console.log('welcome')
  return (
    <>
      <div className='welcome mx-5'>
        <header>
          <h1>Hi!</h1>
        </header>
        <main>
          <p>I am here to introduce myself as a <span className="fw-bold">software developer</span> . I
            prefer to work mostly in the <span className="fw-bold">front-end designinng</span> although have a
            knowledge of <span className="fw-bold">back-end programming.</span>
          </p>
          <p>
            Nowadays, the IT world is changing drastically, by the empact of new
            teachnology, to fullfill the demands of <span className="fw-bold">modern world requirement.</span>
          </p>
          <p>
            I also want to contribute <span className="fw-bold">my skills in this sector</span> and be the part
            of those teams who all are adding <span className="fw-bold">the huge value to the IT industry!</span>
          </p>
          ThankYou.
        </main>
      </div>
    </>
  );
}
export default Welcome
export const MemoizedWelcome=React.memo(Welcome);


