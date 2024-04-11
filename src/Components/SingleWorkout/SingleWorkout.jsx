import parterImg1 from "../assets/partner1.png";
import parterImg2 from "../assets/partner2.png";
import parterImg3 from "../assets/partner3.png";

import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";

const SingleWorkout = () => {
  const { exerciseId } = useParams();
  const [exercise, setExercise] = useState(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/exercises/id/${exerciseId}`)
      .then((response) => response.json())
      .then((data) => setExercise(data))
      .catch((error) => console.error("Failed to load exercise", error));
  }, [exerciseId]);

  useEffect(() => {
    if (isRunning) {
      const start = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - start);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    return (
      <span>
        <span className='time-element'>
          {`${minutes < 10 ? "0" : ""}${minutes}`}
          <span className='time-label'>min</span>
        </span>
        :
        <span className='time-element'>
          {`${seconds < 10 ? "0" : ""}${seconds}`}
          <span className='time-label'>sec</span>
        </span>
        :
        <span className='time-element'>
          {`${milliseconds < 10 ? "0" : ""}${milliseconds}`}
          <span className='time-label'>ms</span>
        </span>
      </span>
    );
  };

  if (!exercise) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className='container-fluid Single-Workout-Wrapper'>
        <div className='container'>
          <div className='row gx-0 align-items-center'>
            <div className='col-md-6'>
              <div className='fitness-col3'>
                <iframe
                  src={exercise.youtube_link.replace("watch?v=", "embed/")}
                  frameBorder='0'
                  allowFullScreen
                  width='650'
                  height='385'
                  className='youtube-frame'
                ></iframe>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='fitness-col4'>
                <h1 className='main-heading-workout'>{exercise.name}</h1>
                <div className='pt-3 pb-4'>
                  <p>{exercise.description}.</p>
                </div>
                <div className='stop-watch'>{formatTime(time)}</div>
                <div className='btn-container-workout'>
                  <button className='btn-timer btn-start' onClick={handleStart}>
                    Start
                  </button>
                  <button className='btn-timer btn-stop' onClick={handleStop}>
                    Stop
                  </button>
                  <button className='btn-timer btn-reset' onClick={handleReset}>
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='fit-goal' className='container-fluid Fitness-Goal'>
        <div className='container'>
          <div className='row gx-0 align-items-center'>
            <div className='col-md-5'>
              <div className='fitness-col1'>
                <h1>970K+ More</h1>
                <p>Trusted Companies Partner</p>
              </div>
            </div>
            <div className='col-md-7'>
              <div className='fitness-col2'>
                <img src={parterImg1} alt='' className='img-fluid px-3' />
                <img src={parterImg2} alt='' className='img-fluid px-3' />
                <img src={parterImg3} alt='' className='img-fluid px-3' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleWorkout;
