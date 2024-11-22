import React from "react";
import "./user.css";
import Index from "../Index";
const ChatLaytout = () => {
  return (
    <Index.Box className="main-layout">
      <Index.Box className="main-div-layout">
        <Index.SideBar />
      </Index.Box>
      <Index.Box className="main-div-heare">
        <Index.Box className="main-div-head">
          <Index.Header />
        </Index.Box>
        <Index.Box className="main-div-layout">
          <Index.Outlet />
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
};

export default ChatLaytout;
