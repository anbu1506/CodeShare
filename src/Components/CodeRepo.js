import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "./CodeRepo.css";
import TextField from "@mui/material/TextField";
import { useCopyToClipboard } from "usehooks-ts";
import { Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const CodeRepo = ({ islogin, setislogin }) => {
  const navigate = useNavigate();

  const [, Copy] = useCopyToClipboard("");
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");

  const fetchdata = () => {
    return islogin
      ? fetch("http://localhost:8080/api/getdata", {
          headers: {
            "content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => setDatas(data))
      : navigate("/");
  };

  useEffect(() => {
    fetchdata();
  }, []);

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
              <button
                className="btn"
                onClick={() => {
                  setislogin(false);
                  navigate("/");
                }}
              >
                Logut
              </button>
            </ul>
          </div>
        </nav>
      </div>

      <div className="Container">
        <div className="searchBar">
          <TextField
            style={{ Color: "white", borderRadius: "20px" }}
            id="standard-search"
            label="Search Here !"
            type="search"
            variant="standard"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>

        <div className="repo">
          {datas
            .filter((element) => {
              if (search === "") {
                return element;
              } else if (
                element.question.toLowerCase().includes(search.toLowerCase())
              ) {
                return element;
              }
            })
            .map((element, key) => {
              return (
                <>
                  <Paper className="paper">
                    <div className="code-question" key={key}>
                      <div className="question">
                        <p>{element.question}</p>
                      </div>
                      <div>
                        <button
                          className="copy-btn"
                          onClick={() => {
                            Copy(element.code);
                            alert("Copied Successfully :)");
                          }}
                        >
                          Copy
                        </button>
                      </div>
                      <div className="code">
                        <pre>{element.code}</pre>
                      </div>
                    </div>
                  </Paper>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CodeRepo;
