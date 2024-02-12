import "./Navbar.css";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

import dumbellIcon from "../Assets/dumbell_icon.png";

export const Navbar = () => {
  const { logOut } = useUserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px='20px'
    >
      <Link to='/home'>
        <img
          src={dumbellIcon}
          alt='dumbell_logo.png'
          style={{ width: "48px", height: "48px", margin: "0px 40px" }}
        />
      </Link>
      <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
        <Link
          to='/home'
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href='#exercises'
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
        <a
          className='logout-btn'
          style={{ textDecoration: "none", color: "#3A1212" }}
          onClick={handleLogout}
        >
          Logout
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
