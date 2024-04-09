import { useEffect, useState } from "react";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";

import { useNavigate } from "react-router-dom";

const PoseWorkoutCardsPage = () => {
  const navigate = useNavigate();
  const [poseExercises, setPoseExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/exercises/")
      .then((response) => response.json())
      .then((data) => setPoseExercises(data))
      .catch((error) => console.error("There was an error!", error));
  }, []);

  const handleSpecificPoseClick = (exercise, event) => {
    event.preventDefault();
    event.stopPropagation();
    let path = "/";
    switch (exercise.type) {
      case "bicepcurl":
        path = `/bicep/${exercise.exercise_id}`;
        break;
      case "squat":
        path = `/squats/${exercise.exercise_id}`;
        break;
      case "plank":
        path = `/plank/${exercise.exercise_id}`;
        break;
      default:
        console.error("Unknown exercise type");
        return;
    }
    navigate(path);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredExercises = poseExercises
    .filter((exercise) =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((exercise) => exercise.pose_estimation === "Yes");

  return (
    <>
      <Navbar />

      <div className='exercise-menu'>
        <div className='contianer mx-4'>
          <div className='workout-title-detail my-4 mx-5'>
            <span className='main-span'>Pose Estimation Workouts</span>
            <h2 className='main-h2'>Featured Workouts</h2>
            <p className='main-p mt-3'>
              Explore our curated collection of workouts tailored to various
              fitness levels. Click on any workout to delve deeper into its
              details and watch instructional videos for proper form and
              technique.
            </p>
          </div>
          <div className='form-outline my-4'>
            <input
              type='search'
              id='form1'
              className='form-control search-bar my-5 mx-auto'
              placeholder='Search Exercises'
              aria-label='Search'
              onChange={handleSearchChange}
            />
          </div>
          <div className='row gx-0'>
            {/* ******************************************************** */}
            {filteredExercises.map((exercise) => (
              <div key={exercise.exercise_id} className='col-md-4'>
                <div
                  onClick={(event) => handleSpecificPoseClick(exercise, event)}
                  className='menu-col'
                >
                  <img
                    src={exercise.image_url}
                    alt='exercise image'
                    className='img-fluid'
                  />
                  <div className='menu-col-mid'>
                    {/* ******************************************************** */}
                    <div className='row mb-2'>
                      <div className='col-md-9'>
                        <h2>{exercise.name}</h2>
                      </div>
                      <div className='col-md-3'>
                        <h2>{exercise.calories_burned_per_repetition} Cal</h2>
                      </div>
                    </div>
                    {/* ******************************************************** */}
                    <h6>Targets: {exercise.target_muscle_group}</h6>
                    <p className='mb-3'>{exercise.description}</p>
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

export default PoseWorkoutCardsPage;
