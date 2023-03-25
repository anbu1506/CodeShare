import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import "./Login.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login({ islogin, setislogin, userdb, setuserdb }) {
  const [mailId, setmailId] = useState();
  const [password, setpassw] = useState();
  const navigate = useNavigate();
  const Signin = () => {
    fetch(
      "http://localhost:8080/api/login?mailId=" +
        mailId +
        "&password=" +
        password,
      {
        method: "Post",
      }
    )
      .then((response) => response.json())
      .then((userdata) => setislogin(userdata))
      .then(console.log(islogin));
    if (islogin === true) navigate("/CodeRepo");
    else alert("wrong credentials !");
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <div className="txt">
        <h1>Think twice code once</h1>
      </div>

      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <p>Please login to your account</p>

            <MDBInput
              onChange={(e) => {
                setmailId(e.target.value);
              }}
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
            />
            <MDBInput
              onChange={(e) => {
                setpassw(e.target.value);
              }}
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
            />

            <div className="text-center pt-1 mb-5 pb-1">
              <Button className="signbtn" onClick={Signin}>
                Sign in
              </Button>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <Button
                onClick={() => {
                  navigate("/SignUp");
                }}
              >
                SignUp
              </Button>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div>
              <img
                src="https://i.pinimg.com/originals/b9/33/7e/b9337ef1951e690e3dba5ed6ff8c5163.png"
                style={{ width: "450px", height: "400px" }}
                alt="img"
              ></img>
            </div>
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">Share your knowledge accross the web</h4>
              <p className="small mb-0">
                get answers for your mysteries and solve the mysteries of others
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
