//In React functional components, the equivalent of componentWillUnmount
//(from class components) is implemented using the cleanup function inside useEffect.

//🔁 Explanation:
//The function inside useEffect runs after the component mounts.
//The function returned from useEffect runs when the component unmounts or
//before re-running the effect (if dependencies change).
//The empty [] dependency array ensures this happens only once on unmount,
//similar to componentWillUnmount.

import React, { useEffect } from "react";

export default function App1() {
  useEffect(() => {
    const socket = new WebSocket("wss://example.com/socket");

    socket.onmessage = (event) => {
      console.log("Received:", event.data);
    };

    return () => {
      socket.close();
      console.log("WebSocket connection closed on unmount");
    };
  }, []);

  return (
    <div>
      <p>equivalent of componentWillUnmount in function component</p>
    </div>
  );
}
