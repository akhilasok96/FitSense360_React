import { Routes, Route } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import { BicepCurl } from "../Components/BicepCurl/BicepCurl";
import { Navbar } from "../Components/Navbar/Navbar";
import { Homepage } from "../Components/Homepage/Homepage";
import { Box } from "@mui/material";
import "../App.css";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import ProtectedRoute from "../context/ProtectedRoutes";
import { Squat } from "../Components/Squats/Squats";

export const Views = () => {
  return (
    <Box width='400px' sx={{ width: { xl: "auto" } }} m='auto'>
      <div style={{ minHeight: "100vh" }}>
        <UserAuthContextProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route
              path='/navbar'
              element={
                <ProtectedRoute>
                  <Navbar />
                </ProtectedRoute>
              }
            />
            <Route
              path='/home'
              element={
                <ProtectedRoute>
                  <Homepage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/bicep'
              element={
                <ProtectedRoute>
                  <BicepCurl />
                </ProtectedRoute>
              }
            />

            <Route
              path='/squats'
              element={
                <ProtectedRoute>
                  <Squat />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<div>404 Not Found!</div>} />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </Box>
  );
};

export default Views;
