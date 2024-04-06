import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import featuredImg from "../Assets/featured_info.png";

const UserInfoForm = () => {
  const { user } = useUserAuth();
  console.log(user.email);
  console.log(user.displayName);
  const navigate = useNavigate();
  const wsRef = useRef(null);
  const [imageBase64, setImageBase64] = useState("");

  const [userInfo, setUserInfo] = useState({
    username: user?.displayName || "",
    email: user?.email || "",
    fname: "",
    lname: "",
    age: "",
    gender: "",
    place: "",
    weight: "",
    height: "",
  });

  useEffect(() => {
    wsRef.current = new WebSocket("ws://localhost:8000/ws/user_info/");
    wsRef.current.onopen = () =>
      console.log("WebSocket connection established");
    wsRef.current.onmessage = (message) => {
      const response = JSON.parse(message.data);
      console.log("Response from server:", response);
      if (response.status === "UserInfo saved") {
        navigate("/home");
      }
    };
    wsRef.current.onerror = (error) => console.error("WebSocket error:", error);

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setImageBase64(loadEvent.target.result);
        document.getElementById("selectedAvatar").src = loadEvent.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      const payload = {
        ...userInfo,
        image: imageBase64,
      };
      wsRef.current.send(JSON.stringify(payload));
    } else {
      console.error("WebSocket is not open.");
    }
  };

  return (
    <>
      <div className='container user-info-container'>
        <div className='row border rounded-5 p-3 bg-white shadow box-area'>
          <div className='col-md-6 rounded-4 left-info-box'>
            <div className='featured-image mb-3'>
              <img
                src={featuredImg}
                alt='featured image'
                className='img-fluid'
              />
            </div>
            <p className='text-white fs-2'>Be Verified</p>
            <small className='text-white text-wrap text-center'>
              Join Experienced Designers on this Platform.
            </small>
          </div>
          <div className='col-md-6 right-info-box'>
            <div className='row align-items-center'>
              <div>
                {/* Your file input and image preview JSX */}
                <div className='d-flex justify-content-center mb-3'>
                  <img
                    id='selectedAvatar'
                    src='https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg'
                    className='rounded-circle'
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                    alt='example placeholder'
                  />
                </div>
                <div className='d-flex justify-content-center'>
                  <div className='btn btn-primary btn-rounded mb-4'>
                    <label
                      className='form-label text-white m-1 userAvatarLabel'
                      htmlFor='customFile2'
                    >
                      Upload Image
                    </label>
                    <input
                      type='file'
                      className='form-control d-none userAvatar'
                      id='customFile2'
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </div>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  id='fname'
                  name='fname'
                  value={userInfo.fname}
                  onChange={handleChange}
                  className='form-control form-control-l bg-light fs-6'
                  placeholder='First Name'
                />
              </div>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  id='lname'
                  name='lname'
                  value={userInfo.lname}
                  onChange={handleChange}
                  className='form-control form-control-l bg-light fs-6'
                  placeholder='Last Name'
                />
              </div>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  id='age'
                  name='age'
                  value={userInfo.age}
                  onChange={handleChange}
                  className='form-control form-control-l bg-light fs-6'
                  placeholder='Age'
                />
              </div>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  id='gender'
                  name='gender'
                  value={userInfo.gender}
                  onChange={handleChange}
                  className='form-control form-control-l bg-light fs-6'
                  placeholder='Gender'
                />
              </div>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  id='place'
                  name='place'
                  value={userInfo.place}
                  onChange={handleChange}
                  className='form-control form-control-l bg-light fs-6'
                  placeholder='Place'
                />
              </div>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  id='weight'
                  name='weight'
                  value={userInfo.weight}
                  onChange={handleChange}
                  className='form-control form-control-l bg-light fs-6'
                  placeholder='Weight (Kg)'
                />
              </div>
              <div className='input-group mb-4'>
                <input
                  type='text'
                  id='height'
                  name='height'
                  value={userInfo.height}
                  onChange={handleChange}
                  className='form-control form-control-l bg-light fs-6'
                  placeholder='Height (cm)'
                />
              </div>
              <div className='input-group mb-1'>
                <button
                  onClick={handleClick}
                  className='btn btn-user-info btn-lg w-100 fs-6'
                >
                  Let's Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoForm;
