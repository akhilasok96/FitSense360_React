import "./Homepage.css";
import { Box } from "@mui/material";

import { Navbar } from "../Navbar/Navbar";
import { HeroBanner } from "../HeroBanner/HeroBanner";
import { SearchExercises } from "../SearchExercises/SearchExercises";
import { Exercises } from "../Exercises/Exercises";

export const Homepage = () => {
  return (
    <Box>
      <Navbar />
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};
