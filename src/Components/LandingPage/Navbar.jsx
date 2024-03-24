import logo from "../assets/logo_main.png";
import { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const { logOut } = useUserAuth();

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
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About Us
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Program
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Memberships
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Testimonials
                </a>
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
                  className='btn btn-secondary'
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalShown(false);
                  }}
                >
                  Close
                </button>
                <button
                  type='button'
                  className='btn btn-danger'
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