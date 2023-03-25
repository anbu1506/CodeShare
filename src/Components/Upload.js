import React, { useEffect, useState } from "react";
import "./Upload.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const Upload = ({ islogin, setislogin }) => {
  const [code, setcode] = useState("");
  const [question, setquestion] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    islogin ? console.log("login") : navigate("/");
  }, []);

  const handleclick = (e) => {
    e.preventDefault();
    const data = { question, code };
    console.log(data);
    if (code !== "" && question !== "") {
      fetch("http://localhost:8080/api/adddata", {
        method: "Post",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data),
      }).then(() => {
        console.log("success");
        alert("uploaded Successfully!");
      });
    } else alert("text should not be empty !");
  };

  return (
    <>
      <div>
        <nav className="main-nav">
          <div className="menu-list">
            <ul>
              <li>
                <Link to="/CodeRepo">home</Link>
              </li>
              <li>
                <Link to="/Upload">upload</Link>
              </li>
              <Button
                className="btn"
                onClick={() => {
                  setislogin(false);
                  navigate("/");
                }}
              >
                Logut
              </Button>
            </ul>
          </div>
        </nav>
      </div>
      <div className="upload">
        <form>
          <div className="qn">
            <textarea
              placeholder="Write your question here..."
              rows="4"
              cols="85"
              name="question"
              value={question}
              onChange={(e) => {
                setquestion(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="answer">
            <textarea
              rows="25"
              cols="100"
              placeholder="Write your answer here..."
              name="code"
              value={code}
              onChange={(e) => {
                setcode(e.target.value);
              }}
            ></textarea>
          </div>
          <div>
            <button className="subbtn" onClick={handleclick}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Upload;
