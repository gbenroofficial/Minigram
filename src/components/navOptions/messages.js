import { React, useEffect } from "react";

const Messages = () => {
  useEffect(() => {
    document.title = "Instagram - messages";
  }, []);
  return <div>messages</div>;
};

export default Messages;
