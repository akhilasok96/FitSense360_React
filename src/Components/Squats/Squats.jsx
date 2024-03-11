import { useRef, useCallback, useEffect, useState } from "react";
import Webcam from "react-webcam";
import "./Squats.css";

export const Squat = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [keypoints, setKeypoints] = useState([]);
  const [counter, setCounter] = useState(0);
  const [stage, setStage] = useState("Not Started");
  const WEBSOCKET_URL = "ws://127.0.0.1:8000/ws/stream/";
  let socket = useRef(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      return webcamRef.current.getScreenshot();
    }
  }, [webcamRef]);

  const sendFrame = useCallback(() => {
    const frame = capture();
    if (
      frame &&
      socket.current &&
      socket.current.readyState === WebSocket.OPEN
    ) {
      socket.current.send(
        JSON.stringify({ data: frame, exercise_type: "squat" })
      );
    }
  }, [capture]);

  useEffect(() => {
    socket.current = new WebSocket(WEBSOCKET_URL);

    socket.current.onopen = () => {
      console.log("WebSocket Connected");
      const interval = setInterval(sendFrame, 100);
      return () => clearInterval(interval);
    };

    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message.voice_prompt);
      setKeypoints(message.keypoints);
      console.log(keypoints);
      setCounter(message.counter);
      setStage(message.stage);
      if (message.voice_prompt && message.voice_prompt !== "") {
        speak(message.voice_prompt);
      }
    };

    socket.current.onclose = () => console.log("WebSocket Disconnected");

    return () => {
      if (socket.current) {
        socket.current.close();
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
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;

    if (keypoints.length > 0) {
      // Draw keypoints
      for (let i = 11; i < keypoints.length; i++) {
        const [x, y] = keypoints[i];
        ctx.beginPath();
        ctx.arc(x * canvas.width, y * canvas.height, 5, 0, 2 * Math.PI);
        ctx.fill();
      }

      // Draw skeleton for left arm (left and right leg)
      const drawLine = (keypoint1, keypoint2) => {
        if (keypoint1 && keypoint2) {
          ctx.beginPath();
          ctx.moveTo(keypoint1[0] * canvas.width, keypoint1[1] * canvas.height);
          ctx.lineTo(keypoint2[0] * canvas.width, keypoint2[1] * canvas.height);
          ctx.stroke();
        }
      };

      const leftHip = keypoints[23];
      const leftKnee = keypoints[25];
      const leftAnkle = keypoints[27];

      drawLine(leftHip, leftKnee);
      drawLine(leftKnee, leftAnkle);
    }
  }, [keypoints]);

  const speak = (text) => {
    if (text !== "") {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US";
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div
      className='squat_container'
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
        className='squat-info'
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          color: "white",
          zIndex: 2,
        }}
      >
        <h2>
          Counter: <p>{counter}</p>
        </h2>
        <h2>
          Stage: <p>{stage}</p>
        </h2>
      </div>
    </div>
  );
};

export default Squat;
