import { useEffect, useState } from "react";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";

// import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

const WorkoutHistory = () => {
  const user = useUserAuth();

  const [workoutHistory, setWorkoutHistory] = useState([]);

  useEffect(() => {
    const fetchWorkoutHistory = async () => {
      if (user.user.email) {
        try {
          const response = await fetch(
            `http://localhost:8000/api/workout_logs/${user.user.email}`
          );
          const data = await response.json();
          const workoutsWithImages = await Promise.all(
            data.map(async (workout) => {
              const exerciseResponse = await fetch(
                `http://localhost:8000/api/exercises/id/${workout.exercise_id}/`
              );
              const exerciseData = await exerciseResponse.json();
              return { ...workout, exerciseImage: exerciseData.image_url };
            })
          );
          setWorkoutHistory(workoutsWithImages);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchWorkoutHistory();
  }, [user.user.email]);

  if (workoutHistory) {
    console.log(workoutHistory);
  }

  return (
    <>
      <Navbar />
      <div className='exercise-menu'>
        <div className='contianer mx-4'>
          <div className='workout-title-detail my-4 mx-5'>
            <span className='main-span'>Your Workout History</span>
            <h2 className='main-h2'>Featured Workouts</h2>
            <p className='main-p mt-3'>
              Explore our curated collection of workouts tailored to various
              fitness levels. Click on any workout to delve deeper into its
              details and watch instructional videos for proper form and
              technique.
            </p>
          </div>
          <div className='row gx-0'>
            {/* ******************************************************** */}
            {workoutHistory.map((workoutlog, index) => (
              <div key={index} className='col-md-4'>
                <div className='menu-col'>
                  <img
                    src={workoutlog.exerciseImage}
                    alt='exercise image'
                    className='img-fluid'
                  />
                  <div className='menu-col-mid'>
                    {/* ******************************************************** */}
                    <div className='row mb-2'>
                      <div className='col-md-9'>
                        <h2>{workoutlog.exercise_name}</h2>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        <h6>Date: {workoutlog.date}</h6>
                      </div>
                      <div className='col-md-6'>
                        <h6>Date: {workoutlog.time}</h6>
                      </div>
                    </div>
                    <div className='row workout-date'></div>
                    {/* ******************************************************** */}
                    <h6>Calorie Burned: {workoutlog.predicted_calories}</h6>
                    <h6 className='mb-3'>
                      Repetititons: {workoutlog.repetition}
                    </h6>
                    {/* ******************************************************** */}
                    <div className='row align-items-center'>
                      <div className='col-md-7 menu-col-icon1'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-regular fa-star'></i>
                      </div>
                      <div className='col-md-5 text-center menu-col-icon2'>
                        <i className='fa-solid fa-plus'></i>
                      </div>
                    </div>
                    {/* ******************************************************** */}
                  </div>
                </div>
              </div>
            ))}
            {/* ******************************************************** */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkoutHistory;
