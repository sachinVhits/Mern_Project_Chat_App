import React from "react";
import "./user.css";
import Index from "../Index";
const Header = ({ userInfo }) => {
  if (!userInfo) {
    return (
      <Index.Box className="no-chat-box">
        {/* <Index.Box className="no-chat-message">Chat not found</Index.Box> */}
      </Index.Box>
    );
  }
  return (
    <Index.Box className="head-main">
      <Index.Box className="main-icons">
        <Index.Box className="main-profile-user">
          <Index.Box>
            <img src={Index.Jpg.Avtar} />
          </Index.Box>
          <Index.Box className="main-profile">
            <Index.Box className="user-name">
              {userInfo?.userName || "Select a User"}
            </Index.Box>
            <Index.Box className="main-box-icon-status">
              <Index.FiberManualRecordIcon className="icon-staus" />
              <Index.Box className="user-on-off">Online</Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
      <Index.Box className="main-menu">
        <Index.VideocamIcon />
        <Index.CallIcon />
        <Index.WidgetsIcon />
      </Index.Box>
    </Index.Box>
  );
};

export default Header;
