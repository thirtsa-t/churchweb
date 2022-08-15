import React from "react";

import "../blog/BlogPage.css";
import photos2 from "../../assets/photos2.jpg";

const BlogPage = () => {
  return (
    <section>
      <div className="blogContainer">
        <div className="blogheader">
          <h2> OUr Blog</h2>
          <p>My supercool header</p>
        </div>

        <div class="blogRow">
          <div class="column1 left">
            <img src={photos2} width={"100%"} />
            <div className="Content">
              <div className="blogContent">
                <p>ALL you want to know about bible</p>
              </div>
              <div className="blog">
              <div className="blogDate">
                <ul>
                  <ol>13</ol>
                  <ol>September</ol>
                  <ol>2022</ol>
                </ul>
              </div>
              <div className="blogParagraph">
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia....
                </p>
              </div>
              </div>
            </div>
          </div>
          <div class="column1 middle">
            <img src={photos2} width={"100%"} />
            <div className="Content">
              <div className="blogContent">
                <p>ALL you want to know about bible</p>
              </div>

              <div className="blog">
              <div className="blogDate">
                <ul>
                  <ol>13</ol>
                  <ol>September</ol>
                  <ol>2022</ol>
                </ul>
              </div>
              <div className="blogParagraph">
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia....
                </p>
              </div>
              </div>
            </div>
          </div>
          <div class="column1 right">
            <img src={photos2} width={"100%"} />
            <div className="Content">
              <div className="blogContent">
                <p>ALL you want to know about bible</p>
              </div>
              <div className="blog">
              <div className="blogDate">
                <ul>
                  <ol>13</ol>
                  <ol>September</ol>
                  <ol>2022</ol>
                </ul>
              </div>
              <div className="blogParagraph">
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia....
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogPage;
