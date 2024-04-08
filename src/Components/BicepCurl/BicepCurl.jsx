import { useRef, useCallback, useEffect, useState } from "react";
import Webcam from "react-webcam";
import Navbar from "../LandingPage/Navbar";
import { useUserAuth } from "../../context/UserAuthContext";
import Footer from "../LandingPage/Footer";

export const BicepCurl = () => {
  const { user } = useUserAuth();
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [keypoints, setKeypoints] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isExerciseStarted, setIsExerciseStarted] = useState(false);
  const [stage, setStage] = useState("Not Started");
  const [userData, setUserData] = useState(null);

  const WEBSOCKET_URL = "ws://127.0.0.1:8000/ws/stream/";
  let socket = null;

  useEffect(() => {
    if (user?.email) {
      fetch(`http://127.0.0.1:8000/api/user/${user.email}`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [user?.email]);

  const capture = useCallback(() => {
    if (webcamRef.current && isExerciseStarted) {
      return webcamRef.current.getScreenshot();
    }
  }, [webcamRef, isExerciseStarted]);

  const sendFrame = useCallback(() => {
    const frame = capture();
    if (frame && socket && socket.readyState === WebSocket.OPEN) {
      socket.send(
        JSON.stringify({
          data: frame,
          exercise_type: "bicep_curl",
        })
      );
    }
  }, [capture]);

  useEffect(() => {
    if (isExerciseStarted) {
      socket = new WebSocket(WEBSOCKET_URL);

      socket.onopen = () => {
        console.log("WebSocket Connected");
        const interval = setInterval(sendFrame, 100);
        return () => clearInterval(interval);
      };

      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        setKeypoints(message.keypoints);
        setCounter(message.counter);
        setStage(message.stage);
        console.log(message);

        if (message.voice_prompt && message.voice_prompt !== "") {
          speak(message.voice_prompt);
        }
      };

      return () => {
        if (socket) {
          socket.close();
        }
      };
    }
  }, [sendFrame, isExerciseStarted, socket]);

  useEffect(() => {
    clearCanvas();
  }, [keypoints]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas && webcamRef.current) {
      const ctx = canvas.getContext("2d");
      canvas.width = webcamRef.current.video.videoWidth;
      canvas.height = webcamRef.current.video.videoHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleStartExercise = () => {
    setIsExerciseStarted(true);
    setCounter(0);
    setStage("Not Started");
  };

  const handleStopExercise = () => {
    setIsExerciseStarted(false);
    setCounter(0);
    clearCanvas();

    const duration = Math.random() * (40 - 5) + 5;
    const heart_rate = Math.random() * (130 - 80) + 80;
    const body_temp = Math.random() * (41 - 37) + 37;

    if (userData) {
      const caloriePredictionData = {
        gender: userData.gender,
        age: userData.age,
        height: userData.height,
        weight: userData.weight,
        duration: duration.toFixed(2),
        heart_rate: heart_rate.toFixed(2),
        body_temp: body_temp.toFixed(2),
      };

      console.log(caloriePredictionData);

      const calorieSocket = new WebSocket(
        "ws://localhost:8000/ws/calorie_prediction/"
      );

      calorieSocket.onopen = () => {
        console.log("Calorie Prediction WebSocket Connected");
        calorieSocket.send(JSON.stringify(caloriePredictionData));
      };

      calorieSocket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log("Predicted Calories Burned:", message.prediction);
        const caloriesRounded = parseFloat(message.prediction).toFixed(2);
        const speechMessage = `Exercise Complete, you have burned ${caloriesRounded} calories.`;
        speak(speechMessage);
      };

      calorieSocket.onclose = () =>
        console.log("Calorie Prediction WebSocket Disconnected");
    }
  };

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

      // Draw skeleton for left arm (shoulder -> elbow -> wrist)
      const drawLine = (keypoint1, keypoint2) => {
        if (keypoint1 && keypoint2) {
          ctx.beginPath();
          ctx.moveTo(keypoint1[0] * canvas.width, keypoint1[1] * canvas.height);
          ctx.lineTo(keypoint2[0] * canvas.width, keypoint2[1] * canvas.height);
          ctx.stroke();
        }
      };

      const leftShoulder = keypoints[11];
      const leftElbow = keypoints[13];
      const leftWrist = keypoints[15];

      drawLine(leftShoulder, leftElbow);
      drawLine(leftElbow, leftWrist);
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
    <>
      <Navbar />
      <div className='container my-5'>
        <div className='row'>
          {/* Webcam and Canvas Column */}
          <div className='col-md-6'>
            <div
              className='bicep_container position-relative'
              style={{ width: "100%", height: 480 }} // Adjusted width to fill the column
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
                style={{ position: "absolute", width: "100%", height: "100%" }}
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
            </div>
          </div>

          {/* Counter, Stage, and Controls Column */}
          <div className='col-md-6 exercise-info-tab'>
            {/* First row for Sets and Reps selection */}
            <div className='row set-reps-buttons mx-auto'>
              <div className='col'>
                <div className='buttons-group-wrapper mb-4'>
                  <button
                    className='btn btn-success'
                    onClick={handleStartExercise}
                    disabled={isExerciseStarted}
                  >
                    Start
                  </button>
                  {/* Start and Stop Buttons */}
                  <button
                    className='btn btn-danger'
                    onClick={handleStopExercise}
                    disabled={!isExerciseStarted}
                  >
                    Stop
                  </button>
                </div>
              </div>
            </div>

            {/* Second row for Counter and Stage */}
            <div className='row'>
              <div className='col'>
                <div className='curl-info'>
                  <div className='curl-info-stats'>
                    <h2>Counter:</h2>
                    <span>{counter}</span>
                  </div>
                  <div className='curl-info-stats'>
                    <h2>Stage:</h2>
                    <span>{stage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BicepCurl;
