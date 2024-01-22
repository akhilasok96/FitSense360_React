import { Routes, Route } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import { BicepCurl } from "../Components/BicepCurl/BicepCurl";
import { Navbar } from "../Components/Navbar/Navbar";
import { Homepage } from "../Components/Homepage/Homepage";
import { Box } from "@mui/material";

export const Views = () => {
  return (
    <Box width='400px' sx={{ width: { xl: "1488px" } }} m='auto'>
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/bicep' element={<BicepCurl />} />
          <Route path='*' element={<div>404 Not Found!</div>} />
        </Routes>
      </div>
    </Box>
  );
};

export default Views;
