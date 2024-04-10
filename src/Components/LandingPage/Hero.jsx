import playBtn from "../assets/play.png";
import { useState, useEffect } from "react";
// import mainImg from "../assets/main_image1.png";
// import mainImg2 from "../assets/main_image2.png";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import { Autoplay, Scrollbar } from "swiper/modules";

const Hero = () => {
  const navigate = useNavigate();

  const { user } = useUserAuth();
  const [userData, setUserData] = useState(null);
  console.log(user);

  const handleWorkoutClick = () => {
    navigate("/work");
  };

  useEffect(() => {
    if (user?.email) {
      fetch(`http://127.0.0.1:8000/api/user/${user.email}`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [user?.email]);

  return (
    <>
      {/* ********************************** */}
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Scrollbar]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='container-fluid Hero'>
            <div className='container gx-0'>
              <div className='row gx-0'>
                <div className='col-md-6'>
                  <div className='Hero-col1'>
                    {/* <h1>
                      Get A <span>Healthy</span> Body With{" "}
                      <span>Personalized</span> Exercises
                    </h1> */}
                    <h1>
                      Welcome, <span>{user.displayName}</span>
                    </h1>
                    <p>
                      Welcome to our state-of-the-art workout trainer app,
                      designed to bring the future of fitness into your home.
                      Here, we combine the power of technology with the science
                      of movement, offering you an unparalleled training
                      experience.
                    </p>
                    <div className='herobtns'>
                      <button
                        onClick={handleWorkoutClick}
                        className='btn1 btn0'
                      >
                        Get Started
                      </button>
                      <button className='play_btn'>
                        <img src={playBtn} alt='' />
                        <span>Watch Videos</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='Hero-col2'></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container-fluid Hero Hero1'>
            <div className='container gx-0'>
              <div className='row gx-4 align-items-center'>
                <div className='col-md-6'>
                  <div className='Hero-col1'>
                    {userData && (
                      <h1>
                        Your <span>BMI: </span>
                        {userData.bmi}
                      </h1>
                    )}
                    <p>
                      {userData &&
                        (userData.bmi < 18.5
                          ? "Your BMI suggests you're in the underweight category. Focusing on nutrient-rich foods and strength training can help you build a healthier body."
                          : userData.bmi <= 24.9
                          ? "Great job! Your BMI is in the normal range. Continue with your balanced diet and regular exercise to maintain your health."
                          : userData.bmi <= 29.9
                          ? "Your BMI falls into the overweight category. Incorporating cardiovascular exercises and monitoring your nutrition can aid in reaching a healthier weight."
                          : "Your BMI indicates obesity. It's important to consult a healthcare professional to create a safe, effective plan for achieving a healthier lifestyle.")}
                    </p>
                    <div className='herobtns'>
                      <button className='btn1 btn0'>Get Started</button>
                      <button className='play_btn'>
                        <img src={playBtn} alt='' />
                        <span>Watch Videos</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className='col-md-6'>
                  <div className='Hero-col2'>
                    <img src={mainImg} className='img-fluid' alt='' />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container-fluid Hero Hero2'>
            <div className='container gx-0'>
              <div className='row gx-0 align-items-center'>
                <div className='col-md-6 order-md-2'>
                  <div className='Hero-col1'>
                    <h1>
                      Get A <span>Healthy</span> Body With{" "}
                      <span>Personalized</span> Exercises
                    </h1>
                    <p>
                      Our unique pose estimation feature guides you through each
                      exercise, ensuring you maintain the correct form for
                      effective workouts and minimized risk of injury.
                    </p>
                    <div className='herobtns'>
                      <button className='btn1 btn0'>Get Started</button>
                      <button className='play_btn'>
                        <img src={playBtn} alt='' />
                        <span>Watch Videos</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className='col-md-6 order-md-1'>
                  <div className='Hero2-col2'>
                    <img src={mainImg2} alt='' className='img-fluid' />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
