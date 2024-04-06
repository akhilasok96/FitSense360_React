import { Routes, Route } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import { BicepCurl } from "../Components/BicepCurl/BicepCurl";
import { Homepage } from "../Components/Homepage/Homepage";
import "../App.css";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import ProtectedRoute from "../context/ProtectedRoutes";
import { Squat } from "../Components/Squats/Squats";
import UserInfoForm from "../Components/UserInfoForm/UserInfoForm";
import "bootstrap/dist/css/bootstrap.css";
import { WorkoutCardsPage } from "../Components/WorkoutCardsPage/WorkoutCardsPage";
import CalorieForm from "../Components/CalorieForm/CalorieForm";

export const Views = () => {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/work'
          element={
            <ProtectedRoute>
              <WorkoutCardsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/calorie'
          element={
            <ProtectedRoute>
              <CalorieForm />
            </ProtectedRoute>
          }
        />
        <Route
          path='/info'
          element={
            <ProtectedRoute>
              <UserInfoForm />
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
  );
};

export default Views;
