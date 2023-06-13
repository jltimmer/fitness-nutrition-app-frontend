import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ExerciseList from './components/ExerciseList'

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
  const [exercises, setExercises] = useState(exercises_data);

  return (
    <>
    <ExerciseList exercises={exercises} />
    </>
  )
}

export default App
