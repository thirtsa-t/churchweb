import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePageView from "../Views/HomePageView";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Index;
