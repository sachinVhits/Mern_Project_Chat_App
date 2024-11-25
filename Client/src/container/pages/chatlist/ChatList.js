import React from "react";
import Index from "../../../component/Index";
import "../chatlist/chatlist.css";

const ChatList = ({ searchQuery, setUserInfo, userInfo }) => {
  const userMessages = [
    {
      userName: "Sachin",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: true,
    },
    {
      userName: "Surabhi",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: true,
    },
    {
      userName: "Preeti",
      message: "Hello there!",
      time: "10:30 AM",
      isSeen: false,
    },
    {
      userName: "Durgesh",
      message: "How are you?",
      time: "10:35 AM",
      isSeen: true,
    },
    {
      userName: "Jagriti",
      message: "Good morning!",
      time: "10:40 AM",
      isSeen: false,
    },
    {
      userName: "Jatin",
      message: "See you soon.",
      time: "10:50 AM",
      isSeen: true,
    },
    {
      userName: "Nilesh",
      message: "Good morning!",
      time: "10:40 AM",
      isSeen: false,
    },
  ];

  const filteredMessages = userMessages.filter(
    (msg) =>
      msg.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Index.Box className="main-chat-list-box">
      <Index.List className="list-container">
        {filteredMessages.map((msg, index) => (
          <Index.ListItem
            className={`list-item ${
              userInfo?.userName === msg.userName ? "selected-user" : ""
            }`}
            key={index}
            onClick={() => {
              setUserInfo(msg);
            }}
          >
            <Index.Box className="list-chat">
              <Index.ListItemAvatar>
                <Index.CardMedia
                  component="img"
                  className="main-card"
                  image={Index.Jpg.Avtar}
                />
              </Index.ListItemAvatar>
              <Index.Box className="chat-box">
                <Index.Box className="time-name">
                  <Index.ListItemText
                    className="content-main"
                    primary={msg.userName}
                  />
                  <Index.Typography className="time-css">
                    {msg.time}
                  </Index.Typography>
                </Index.Box>
                <Index.Box className="message-tick">
                  <Index.ListItemText className="message-main">
                    {msg.message}
                  </Index.ListItemText>
                  <Index.DoneAllIcon
                    className="tick"
                    style={{
                      color: msg.isSeen ? "blue" : "gray",
                    }}
                  />
                </Index.Box>
              </Index.Box>
              <Index.Box></Index.Box>
            </Index.Box>

            <Index.Box className="tick-icon"></Index.Box>
          </Index.ListItem>
        ))}
      </Index.List>
    </Index.Box>
  );
};

export default ChatList;
