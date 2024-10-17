import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const navigate = useNavigate(); // for navigation

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg"
                  onClick={() => navigate("/PDF")} // Navigate to /main when clicked
                >
                  Use PDFmate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
