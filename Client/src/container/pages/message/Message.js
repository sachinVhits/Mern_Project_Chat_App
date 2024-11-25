import React, { useState, useRef } from "react";
import Index from "../../../component/Index";
import "../message/message.css";

const Message = ({ userInfo }) => {
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };
  const chatArray = [
    {
      // from: "Hi! How are you?",
      timestamp: "2024-11-01T09:00:00Z",
      image: [
        Index.Png.nature2Image,
        Index.Png.natureImage,
        Index.Png.nature2Image,
        Index.Png.nature2Image,
      ],
      // image: Index.Png.natureImage,
    },
    {
      to: "I'm good, thanks! What about you?",
      timestamp: "2024-11-01T09:02:00Z",
    },
    {
      from: "I'm doing great! Working on a new project.",
      timestamp: "2024-11-01T09:05:00Z",
    },
    {
      from: "That’s awesome! Let me know if I can help.",
      timestamp: "2024-11-01T09:07:00Z",
    },
    { to: "Sounds good!", timestamp: "2024-11-02T10:15:00Z" },
    { from: "What have you been up to?", timestamp: "2024-11-02T10:20:00Z" },
    {
      to: "Just working on some new tech stuff. You?",
      timestamp: "2024-11-02T10:25:00Z",
    },
    {
      from: "Same here, trying to learn some new frameworks.",
      timestamp: "2024-11-02T10:30:00Z",
    },
    {
      to: "That’s great! Which frameworks are you learning?",
      timestamp: "2024-11-02T10:35:00Z",
    },
    {
      from: "I’m diving into React and Node.js more deeply.",
      timestamp: "2024-11-02T10:40:00Z",
      image: [Index.Png.nature2Image, Index.Png.natureImage],
    },
    {
      to: "Nice! I’m focusing on Angular and Express.",
      timestamp: "2024-11-02T10:45:00Z",
    },
    {
      from: "Cool, let me know if you need any help with Node.js!",
      timestamp: "2024-11-02T10:50:00Z",
    },
    { to: "Definitely! I’ll reach out.", timestamp: "2024-11-02T10:55:00Z" },
    {
      from: "I’ve been experimenting with some APIs lately.",
      timestamp: "2024-11-02T11:00:00Z",
    },
    {
      to: "That sounds interesting! What kind of APIs?",
      timestamp: "2024-11-02T11:05:00Z",
    },
    {
      from: "Mostly social media APIs, like Twitter and Instagram.",
      timestamp: "2024-11-02T11:10:00Z",
    },
    {
      to: "That’s awesome! How’s that going?",
      timestamp: "2024-11-02T11:15:00Z",
    },
    {
      from: "Pretty well, actually. Learning a lot.",
      timestamp: "2024-11-02T11:20:00Z",
    },
    {
      to: "Glad to hear that! Any cool projects you're working on?",
      timestamp: "2024-11-02T11:25:00Z",
    },
    {
      from: "Yeah, I’m building a small app with Twitter’s API.",
      timestamp: "2024-11-02T11:30:00Z",
    },
    {
      to: "Sounds fun! What does the app do?",
      timestamp: "2024-11-02T11:35:00Z",
    },
    {
      from: "It fetches the latest tweets based on a hashtag.",
      timestamp: "2024-11-02T11:40:00Z",
    },
    {
      to: "That’s cool! Any issues so far?",
      timestamp: "2024-11-02T11:45:00Z",
    },
    {
      from: "Just a few rate limit issues, but nothing major.",
      timestamp: "2024-11-02T11:50:00Z",
    },
    {
      to: "That happens. Twitter's API can be tricky.",
      timestamp: "2024-11-02T11:55:00Z",
    },
    {
      from: "Yeah, but it’s a fun challenge.",
      timestamp: "2024-11-02T12:00:00Z",
    },
    {
      to: "I feel you. I’ve been working on something similar.",
      timestamp: "2024-11-02T12:05:00Z",
    },
    {
      from: "That’s awesome! What are you building?",
      timestamp: "2024-11-02T12:10:00Z",
    },
    {
      to: "I’m building a weather app using OpenWeather API.",
      timestamp: "2024-11-02T12:15:00Z",
    },
    {
      from: "Sounds amazing! Is it a mobile or web app?",
      timestamp: "2024-11-02T12:20:00Z",
    },
    {
      to: "It’s a web app, but I’m thinking of making it mobile-friendly.",
      timestamp: "2024-11-02T12:25:00Z",
    },
    {
      from: "That’s a great idea! Let me know if you need any help with React.",
      timestamp: "2024-11-02T12:30:00Z",
    },
    {
      to: "Thanks! I’ll definitely keep you in mind.",
      timestamp: "2024-11-02T12:35:00Z",
    },
    {
      from: "No problem! Happy to help anytime.",
      timestamp: "2024-11-02T12:40:00Z",
    },
    {
      to: "I’m also working on some game mechanics in JavaScript.",
      timestamp: "2024-11-02T12:45:00Z",
    },
    {
      from: "That sounds fun! What kind of game?",
      timestamp: "2024-11-02T12:50:00Z",
    },
    {
      to: "It’s a simple puzzle game, nothing too fancy.",
      timestamp: "2024-11-02T12:55:00Z",
    },
    {
      from: "That sounds great! I’m sure it’ll be awesome.",
      timestamp: "2024-11-02T13:00:00Z",
    },
    {
      to: "I hope so! I’ll share it once it’s finished.",
      timestamp: "2024-11-02T13:05:00Z",
    },
    { from: "Looking forward to it!", timestamp: "2024-11-02T13:10:00Z" },
    {
      to: "Thanks! How’s your project going?",
      timestamp: "2024-11-02T13:15:00Z",
    },
    {
      from: "It’s going well, just need to finalize a few things.",
      timestamp: "2024-11-02T13:20:00Z",
    },
    {
      to: "I’m sure it’ll be great when it’s done!",
      timestamp: "2024-11-02T13:25:00Z",
    },
    {
      from: "Thanks, I’m working hard on it!",
      timestamp: "2024-11-02T13:30:00Z",
    },
    { to: "Keep it up! You'll get there.", timestamp: "2024-11-02T13:35:00Z" },
    {
      from: "Definitely! How about you? Any new ideas?",
      timestamp: "2024-11-02T13:40:00Z",
    },
    {
      to: "Not yet, but I’m brainstorming some fun things.",
      timestamp: "2024-11-02T13:45:00Z",
    },
    {
      from: "Exciting! Let me know when you come up with something.",
      timestamp: "2024-11-02T13:50:00Z",
    },
    {
      to: "For sure! I'll keep you updated.",
      timestamp: "2024-11-02T13:55:00Z",
    },
    {
      from: "Great! Let’s both keep pushing forward!",
      timestamp: "2024-11-02T14:00:00Z",
    },
    {
      to: "Absolutely! We’ll make awesome stuff together.",
      timestamp: "2024-11-02T14:05:00Z",
    },
    {
      from: "I can’t wait to see what we both come up with.",
      timestamp: "2024-11-02T14:10:00Z",
    },
    {
      to: "Same here, let’s make it happen!",
      timestamp: "2024-11-02T14:15:00Z",
    },
    {
      from: "Let’s do it! Best of luck with your project!",
      timestamp: "2024-11-02T14:20:00Z",
    },
    { to: "Thanks! Same to you!", timestamp: "2024-11-02T14:25:00Z" },
    { from: "We’ve got this!", timestamp: "2024-11-02T14:30:00Z" },
    { to: "Definitely!", timestamp: "2024-11-02T14:35:00Z" },
  ];

  if (!userInfo) {
    return (
      <Index.Box className="no-message-box">
        <Index.Typography className="no-message-text">
          Message not found
        </Index.Typography>
      </Index.Box>
    );
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  return (
    <>
      <Index.Box className="main-message">
        <Index.Box className="message-head">
          <Index.Box className="message-box-main">
            <Index.Box className="main-box-date">
              <Index.Box className="date">Today</Index.Box>
            </Index.Box>

            {chatArray.map((msg, index) => {
              const isSender = msg.from;
              return (
                // <Index.Box
                //   key={index}
                //   className={`message-container ${
                //     isSender ? "sender" : "receiver"
                //   }`}
                // >
                //   {console.log(msg.image)}
                //   {msg.image.map(()=>{

                //   }) ? (
                //     <Index.Box className="message-image">
                //       <img
                //         src={msg.image}
                //         alt="Message Attachment"
                //         className="image"
                //       />
                //     </Index.Box>
                //   ) : (
                //     <Index.Box className="message-box">
                //       <Index.Box
                //         className={
                //           isSender ? "sender-message" : "receiver-message"
                //         }
                //       >
                //         <Index.Typography className="message-text">
                //           {msg.from || msg.to}
                //         </Index.Typography>
                //       </Index.Box>

                //       <Index.Box className={isSender ? "test-date" : ""}>
                //         <Index.Typography className="message-time-date">
                //           {new Date(msg.timestamp).toLocaleTimeString([], {
                //             hour: "2-digit",
                //             minute: "2-digit",
                //           })}
                //         </Index.Typography>
                //       </Index.Box>
                //     </Index.Box>
                //   )}
                // </Index.Box>

                <Index.Box
                  key={index}
                  className={`message-container ${
                    isSender ? "sender" : "receiver"
                  }`}
                >
                  {console.log(msg.image)}
                  {Array.isArray(msg.image) && msg.image.length > 0 ? (
                    <Index.Box className="message-image">
                      {msg.image.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={image}
                          alt="Message Attachment"
                          className="image"
                        />
                      ))}
                    </Index.Box>
                  ) : (
                    <Index.Box className="message-box">
                      <Index.Box
                        className={
                          isSender ? "sender-message" : "receiver-message"
                        }
                      >
                        <Index.Typography className="message-text">
                          {msg.from || msg.to}
                        </Index.Typography>
                      </Index.Box>

                      <Index.Box className={isSender ? "test-date" : ""}>
                        <Index.Typography className="message-time-date">
                          {new Date(msg.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </Index.Typography>
                      </Index.Box>
                    </Index.Box>
                  )}
                </Index.Box>
              );
            })}
          </Index.Box>
        </Index.Box>
      </Index.Box>

      <Index.Box className="main-message-sender">
        <Index.Box className="box-2-main-chat-box">
          <Index.Box className="menu-dashboard-icon">
            <Index.WidgetsIcon className="menu-dashboard-icon-css" />
          </Index.Box>
          <Index.Box className="main-text-message-box-cs">
            <Index.Box className="main-text-type">
              <Index.TextField
                className="main-type-messsage"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Index.Box>
            <Index.Box className="main-send-icon-file">
              <Index.Box className="send-file-icon">
                <Index.InsertLinkIcon onClick={handleIconClick} />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Index.Box>
              <Index.Box onClick={handleSendMessage}>
                <Index.SendIcon />
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
};

export default Message;
