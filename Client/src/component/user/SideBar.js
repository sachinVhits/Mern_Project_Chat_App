import React from "react";
import "./user.css";
import Index from "../Index";
import ChatList from "../../container/pages/chatlist/ChatList";
const SideBar = () => {
  return (
    <Index.Box className="main-box-side-bar">
      <Index.Box className="main-side-bar-div">
        <Index.Box className="main-side">
          <Index.Typography className="text-main">Messaging</Index.Typography>
          <Index.Box className="search-field">
            <Index.TextField
              InputProps={{
                startAdornment: (
                  <Index.InputAdornment
                    position="start"
                    className="icon-adornment"
                  >
                    <Index.SearchIcon />
                  </Index.InputAdornment>
                ),
              }}
              className="sidebar-serach"
              placeholder="Search in dashboard"
            />
          </Index.Box>
        </Index.Box>
        <Index.Box></Index.Box>
        <ChatList />
      </Index.Box>
    </Index.Box>
  );
};

export default SideBar;
