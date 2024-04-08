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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed rerum error doloribus similique, tenetur nobis esse
                      labore iste deleniti, debitis ea reiciendis consectetur
                      quis iusto sunt voluptates necessitatibus voluptatibus
                      architecto!
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed rerum error doloribus similique, tenetur nobis esse
                      labore iste deleniti, debitis ea reiciendis consectetur
                      quis iusto sunt voluptates necessitatibus voluptatibus
                      architecto!
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed rerum error doloribus similique, tenetur nobis esse
                      labore iste deleniti, debitis ea reiciendis consectetur
                      quis iusto sunt voluptates necessitatibus voluptatibus
                      architecto!
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
