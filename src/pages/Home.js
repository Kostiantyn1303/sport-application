import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from 'components/Exercises';
import HeroBanner from 'components/HeroBanner';
import SearchExercises from 'components/SearchExercises';
function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
}

export default Home;