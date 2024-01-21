import { Routes, Route } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import { BicepCurl } from "../Components/BicepCurl/BicepCurl";

export const Views = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/bicep' element={<BicepCurl />} />
        <Route path='*' element={<div>404 Not Found!</div>} />
      </Routes>
    </div>
  );
};

export default Views;
