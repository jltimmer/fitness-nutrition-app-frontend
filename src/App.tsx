import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ExerciseList, { Exercise } from './components/ExerciseList'
import NewExercise from './components/NewExercise';

function App() {
  const exercises_data = [
    {
      "id": 1,
      "name": "Pull-ups",
      "notes": "palms facing away"
  },
  {
      "id": 2,
      "name": "Chin-ups",
      "notes": "palms facing towards"
  }
  ]
  const [exercises, setExercises] = useState<Exercise[]>(exercises_data);

  return (
    <>
    <ExerciseList exercises={exercises} />
    <NewExercise exercises={exercises_data} setExercises={setExercises} />
    </>
  )
}

export default App
