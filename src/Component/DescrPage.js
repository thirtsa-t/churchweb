import React from "react";

import "./DescrPage.css";
import photo1 from '../assets/photo1.jpg';
import photos2 from '../assets/photos2.jpg';
const DescrPage = () => {
  return (
    <section>
      <div className="Containers">

      </div>
      <div class="row1">
        <div class="column1">
          <ul>
            <li>Youth and families</li>
            <li>WorshipTeam</li>
            <li>Mission</li>
          </ul>
        </div>
        <div className="paragraph">
        <div class="column2">
          <div className="header">
          <h2>Youth and families</h2>
          
          <p>
            Money watch helps you get just about everything managed. A smart,
            easy-to-use app that allows you to track and categorize your
            in-and-out money, create budgets that you can actually stick to. It
            works seamlessly across devices and platforms, available on phone,
            tablet, PC and Web.
          </p>
          </div>
          <div className="header">
          <h2>WorshipTeam</h2>
          <p>
            Money watch helps you get just about everything managed. A smart,
            easy-to-use app that allows you to track and categorize your
            in-and-out money, create budgets that you can actually stick to. It
            works seamlessly across devices and platforms, available on phone,
            tablet, PC and Web.
          </p>
          </div>
          <div className="header">
          <h2>Mission and outReach</h2>
          <p>
            Money watch helps you get just about everything managed. A smart,
            easy-to-use app that allows you to track and categorize your
            in-and-out money, create budgets that you can actually stick to. It
            works seamlessly across devices and platforms, available on phone,
            tablet, PC and Web.
          </p>
          </div>
        </div>
        </div>
        <div class="column3">
          <div>
          <img src={photo1} alt="" width={"50%"} />
          </div>
         <div>
          <img src={photos2} alt="" width={"50%"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescrPage;
