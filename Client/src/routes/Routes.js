import React from "react";
import { BrowserRouter, Route, Routes as Routess } from "react-router-dom";
import ChatLaytout from "../component/user/ChatLaytout.js";
const Routes = () => {
  return (
    <BrowserRouter>
      <Routess>
        <Route path="/" element={<ChatLaytout />}></Route>
      </Routess>
    </BrowserRouter>
  );
};

export default Routes;
