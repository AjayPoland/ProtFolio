//framework
const express = require("express");
//driver.
const cors = require("cors");
//db opertaion.
const dbOperation = require("./dbfiles/dbOperation");

//password encrypting
const bcrypt = require("bcrypt");
const saltRounds = 10;

//dependencies for cookies and session.
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

//JSONWebtoken
const jwt = require("jsonwebtoken");

const API_PORT = process.env.PORT || "5000";
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000/"],
    method: ["GET", "POST"],
    //to enable the session
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//initializing session.
app.use(
  session({
    key: "userId", //name of the cookie
    secret: "demo",
    resave: false,
    saveUninitialized: false,
    cookie: {
      //for 24 hours
      expires: 1000 * 60 * 60 * 24,
    },
  })
);

app.post("/save", async (req, res) => {
  try {
    const result = await dbOperation.saveMassage(req.body);
    res.send(result);
  } catch (err) {
    console.log("server error " + err);
  }
});

app.get("/singIn", (req, res) => {
  //console.log(req.session)
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});
app.post("/logOut", (req, res) => {
  req.session.destroy();
  res.send({user:"Logged Out"});
  console.log("check");
});

//uncomment while working with token.
// app.get("/isUserAuth",verifyjwt,(req,res)=>{
    
// })

app.post("/signIn", async (req, res) => {
  const enteredPassword = req.body.password;
  const result = await dbOperation.singIn(req.body.username);
  if (result.recordset.length > 0) {
    const userPassword = result.recordset[0].password;
    bcrypt.compare(enteredPassword, userPassword).then((response) => {
      if (response) {
        //uncomment while woriking with token to authenticate.
        //const id = result.recordset[0].id;
        //const token = jwt.sign({ id }, "jwtSecret", { expiresIn: 300 });
        //storing cookies in the session.
        req.session.user = result;
        res.send({success:"logged-In"})
      } else {
        res.send({ error: "Wrong username/password combination" });
      }
    });
  } else {
    res.send({ error: "user do not exit" });
  }
});
app.post("/singUp", async (req, res) => {
  try {
    const result = await dbOperation.singUp(req.body);
    res.send(result);
  } catch (err) {
    console.log("server error " + err);
  }
});

app.listen(API_PORT, () => {
  console.log(`Listening in the port ${API_PORT}`);
});
