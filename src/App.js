import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      projectID="5ab7aa2f-9400-4d35-9273-70e306302bc9"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
