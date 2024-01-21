import React, { useRef, useCallback, useEffect, useState } from "react";
import Webcam from "react-webcam";

export const BicepCurl = () => {
  const webcamRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [stage, setStage] = useState("Not Started");
  const WEBSOCKET_URL = "ws://127.0.0.1:8000/ws/stream/";
  let socket = null;

  const capture = useCallback(() => {
    if (webcamRef.current) {
      return webcamRef.current.getScreenshot();
    }
  }, [webcamRef]);

  const sendFrame = useCallback(() => {
    const frame = capture();
    if (frame && socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ data: frame }));
    }
  }, [capture]);

  useEffect(() => {
    socket = new WebSocket(WEBSOCKET_URL);

    socket.onopen = () => {
      console.log("WebSocket Connected");
      const interval = setInterval(sendFrame, 100);
      return () => clearInterval(interval);
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setCounter(message.counter);
      setStage(message.stage);
    };

    socket.onclose = () => console.log("WebSocket Disconnected");

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [sendFrame]);

  return (
    <div className='bicep_container'>
      <header className='App-header'>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          videoConstraints={{
            width: 640,
            height: 480,
            facingMode: "user",
          }}
          style={{
            width: 640,
            height: 480,
          }}
        />
        <div>
          <p>Counter: {counter}</p>
          <p>Stage: {stage}</p>
        </div>
      </header>
    </div>
  );
};

export default BicepCurl;
