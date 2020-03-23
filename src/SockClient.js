import React, { useEffect } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const SockClient = () => {
  const connectionSuccess = () => {
    console.log("It works");
  };

  const stompClient = Stomp.over(
    new SockJS("http://localhost:8080/websocketApp")
  );

  useEffect(() => {
    stompClient.connect({}, connectionSuccess);
    return () => {
      stompClient.disconnect(() => {
        console.log("Stomp disconnected");
      });
    };
  }, []);

  return null;
};

export default SockClient;
