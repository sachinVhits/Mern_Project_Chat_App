import React, { useState } from "react";
import "./user.css";
import Index from "../Index";
import Message from "../../container/pages/message/Message";
const ChatLaytout = () => {
  const [userInfo, setUserInfo] = useState(null);
  return (
    <Index.Box className="main-layout">
      <Index.Box className="main-div-layout">
        <Index.SideBar setUserInfo={setUserInfo} userInfo={userInfo} />
      </Index.Box>
      <Index.Box className="main-div-heare">
        <Index.Box className="main-div-head">
          <Index.Header userInfo={userInfo} />
        </Index.Box>
        <Index.Box className="main-div-layout">
          <Index.Outlet userInfo={userInfo} />
        </Index.Box>
        <Message userInfo={userInfo} />
      </Index.Box>
    </Index.Box>
  );
};

export default ChatLaytout;
