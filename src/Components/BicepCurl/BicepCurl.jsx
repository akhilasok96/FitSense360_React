import React, { useRef, useCallback, useEffect, useState } from "react";
import Webcam from "react-webcam";
import "./BicepCurl.css";

export const BicepCurl = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [keypoints, setKeypoints] = useState([]);
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
      const interval = setInterval(sendFrame, 50);
      return () => clearInterval(interval);
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setKeypoints(message.keypoints);
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = webcamRef.current.video.videoWidth;
    canvas.height = webcamRef.current.video.videoHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";

    keypoints.forEach((point) => {
      const [x, y] = point;
      ctx.beginPath();
      ctx.arc(x * canvas.width, y * canvas.height, 5, 0, 2 * Math.PI);
      ctx.fill();
    });
  }, [keypoints]);

  return (
    <div
      className='bicep_container'
      style={{ position: "relative", width: 640, height: 480 }}
    >
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat='image/jpeg'
        videoConstraints={{
          width: 640,
          height: 480,
          facingMode: "user",
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div
        className='curl-info'
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          color: "white",
          zIndex: 2,
        }}
      >
        <p>Counter: {counter}</p>
        <p>Stage: {stage}</p>
      </div>
    </div>
  );
};

export default BicepCurl;
