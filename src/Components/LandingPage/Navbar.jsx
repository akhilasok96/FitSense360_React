import logo from "../assets/logo_main.png";
import { useState, useEffect } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const { logOut } = useUserAuth();

  const { user } = useUserAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://127.0.0.1:8000/api/user/${user.email}`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [user?.email]);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setIsModalShown(false);
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg Nav_main'>
        <div className='container'>
          <a className='img_logo' href='#'>
            <img src={logo} className='img-fluid' alt='' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0 align-items-center'>
              <li className='nav-item nav-text-link'>
                <a className='nav-link' href='/home'>
                  Home
                </a>
              </li>
              <li className='nav-item nav-text-link'>
                <a className='nav-link' href='#'>
                  About Us
                </a>
              </li>
              <li className='nav-item nav-text-link'>
                {/* <a className='nav-link' href='#'>
                  Program
                </a> */}
                <Link to='#best-offers' className='nav-link' smooth>
                  Program
                </Link>
              </li>
              <li className='nav-item nav-text-link'>
                <Link to='#fit-goal' className='nav-link' smooth>
                  AI Trainer
                </Link>
              </li>
              <li className='nav-item nav-text-link'>
                <a className='nav-link' href='#'>
                  Testimonials
                </a>
              </li>
              <li className='userAvatarWrapper'>
                {userData && (
                  <img
                    src={userData.image_url}
                    alt='user profile pic'
                    className='userProfileAvatar'
                  />
                )}
              </li>
            </ul>
            <form className='d-flex ms-md-4' role='search'>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalShown(true);
                }}
                className='btn1'
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
      {isModalShown && (
        <div className='modal' tabIndex='-1' style={{ display: "block" }}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>
                  Are you sure you want to logout?
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalShown(false);
                  }}
                ></button>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-close-dialouge'
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalShown(false);
                  }}
                >
                  Close
                </button>
                <button
                  type='button'
                  className='btn btn-logout-dialouge'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
