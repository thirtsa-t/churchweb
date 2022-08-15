import React from "react";

import "./AboutUsPage.css";
import cross from "../../assets/cross.jpg";

const AboutUs = () => {
  return (
    <section>
      <div className="Container">
        <div className="header">
          <p style={{ fontSize: "50px" }}>About SOK</p>
          <p className="paragraph">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="aboutuscontainer">
          <div className="aboutus">
            <div>
              <p className="box">
                Money watch helps you get just about everything managed. A
                smart, easy-to-use app that allows you to track and categorize
                your in-and-out money, create budgets that you can actually
                stick to. It works seamlessly across devices and platforms,
                available on phone, tablet, PC and Web.
              </p>
            </div>
            <div>
              <p className="box">
                Money watch helps you get just about everything managed. A
                smart, easy-to-use app that allows you to track and categorize
                your in-and-out money, create budgets that you can actually
                stick to. It works seamlessly across devices and platforms,
                available on phone, tablet, PC and Web.
              </p>
            </div>
            <div>
              <p className="box">
                Money watch helps you get just about everything managed. A
                smart, easy-to-use app that allows you to track and categorize
                your in-and-out money, create budgets that you can actually
                stick to. It works seamlessly across devices and platforms,
                available on phone, tablet, PC and Web.
              </p>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div class="card">
                <img src={cross} alt="" width={"50%"} />
                <p>jesus</p>
               
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src={cross} alt="" width={"50%"} />
                <p>jesus</p>
                
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src={cross} alt="" width={"50%"} />
                <p>jesus</p>
               
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src={cross} alt="" width={"50%"} />
                <p>jesus</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
