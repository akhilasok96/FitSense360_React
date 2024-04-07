import parterImg1 from "../assets/partner1.png";
import parterImg2 from "../assets/partner2.png";
import parterImg3 from "../assets/partner3.png";
import fitness1 from "../assets/pose-estimation-banner.png";
import dumbell_icon from "../assets/dumbbell.png";

import { useNavigate } from "react-router-dom";

const FitnessGoal = () => {
  const navigate = useNavigate();
  const handlePoseClick = () => {
    navigate("/pose");
  };

  return (
    <>
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
      {/******************************************/}
      <div className='container-fluid Fitness-Goal1'>
        <div className='container'>
          <div className='row gx-0 align-items-center'>
            <div className='col-md-6'>
              <div className='fitness-col3'>
                <img src={fitness1} alt='' className='img-fluid' />
                <div className='popup'>
                  <img src={dumbell_icon} alt='' />
                  <h6 className='fw-bold'>Professional Trainer</h6>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='fitness-col4'>
                <h1 className='main-heading'>
                  Elevate Your Fitness with Pose Estimation
                </h1>
                <div className='pt-3 pb-4'>
                  <p>
                    Discover the future of fitness with our cutting-edge pose
                    estimation technology. By analyzing your movements in
                    real-time, our system provides instant feedback on your
                    form, ensuring that every exercise is performed safely and
                    effectively. This personalized approach helps prevent
                    injuries, optimizes your workout, and accelerates progress
                    towards your fitness goals.
                  </p>
                  <p>
                    For beginners aiming to master the basics or an experienced
                    athletes
                  </p>
                </div>
                <button onClick={handlePoseClick} className='btn1 btn0'>
                  See Workouts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/******************************************/}
      {/******************************************/}
    </>
  );
};

export default FitnessGoal;
