import "./Homepage.css";
import { Box } from "@mui/material";

import { Navbar } from "../Navbar/Navbar";
import { HeroBanner } from "../HeroBanner/HeroBanner";

// import { SearchExercises } from "../SearchExercises/SearchExercises";
// import { Exercises } from "../Exercises/Exercises";
// import { useState } from "react";

export const Homepage = () => {
  // const [bodyPart, setBodyPart] = useState("all");
  // const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <Navbar />
      <HeroBanner />
      {/* <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      /> */}
    </Box>
  );
};
