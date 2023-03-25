import "./App.css";
import Login from "./Components/Login";
import Upload from "./Components/Upload";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CodeRepo from "./Components/CodeRepo";
import SignUp from "./Components/SignUp";

const App = () => {
  // const [userdb, setuserdb] = useState();

  const [islogin, setislogin] = useState(false);

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Login
                  islogin={islogin}
                  setislogin={setislogin}
                  // userdb={userdb}
                  // setuserdb={setuserdb}
                />
              }
            ></Route>
            <Route
              exact
              path="/CodeRepo"
              element={<CodeRepo islogin={islogin} setislogin={setislogin} />}
            ></Route>
            <Route
              exact
              path="/Upload"
              element={<Upload islogin={islogin} setislogin={setislogin} />}
            ></Route>
            <Route exact path="/SignUp" element={<SignUp />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

// usr": {
//   "userId": 853,
//   "mail": "arasu15062004@gmail.com",
//   "pass": "Anbu",
//   "username": "Anbu Arasu"
// },
// "validuser": true
