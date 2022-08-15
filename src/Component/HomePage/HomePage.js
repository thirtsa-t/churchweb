import React from "react";
import "./HomePage.css";
import logo from "../../assets/logo.png"
import { Button } from "antd";
import ReactTypingEffect from 'react-typing-effect';





const HomePage = () => {
  return (
    <div className="container">
      <div className="images">
        <div className="background">
          <nav className="navigation">
            <a href="/" className="brand-name">
            <img src={logo} alt="Logo" className="photo" />;

            </a>
            <div className="navigation-menu">
              <ul>
                <li>
                  <a class="active" href="/home">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="/about"> Home </a>
                </li>
                <li>
                  <a href="/contact"> About</a>
                </li>
                <li>
                  <a href="/contact">Ministries</a>
                </li>
                <li>
                  <a href="/contact">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="description">
            <br />
            Welcome To
            <br />
            
            <>
      <ReactTypingEffect
        text={["Sons of Korah.", "International"]}
      />

      
      
    </>
          </div>
          <div className="button-container-div">
            
            <Button className="button"
             type="primary">join us</Button>
            </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
