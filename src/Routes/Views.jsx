import { Routes, Route } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import { BicepCurl } from "../Components/BicepCurl/BicepCurl";
import { Homepage } from "../Components/Homepage/Homepage";
import "../App.css";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import ProtectedRoute from "../context/ProtectedRoutes";
import { Squat } from "../Components/Squats/Squats";
import UserInfoForm from "../Components/UserInfoForm/UserInfoForm";

export const Views = () => {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/info' element={<UserInfoForm />} />
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
  );
};

export default Views;
