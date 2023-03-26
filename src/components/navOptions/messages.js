import { React, useEffect } from "react";

const Messages = () => {
  useEffect(() => {
    document.title = "Minigram - messages";
  }, []);
  return <div>messages</div>;
};

export default Messages;
