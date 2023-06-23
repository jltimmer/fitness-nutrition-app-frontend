import { FormEvent, useState } from 'react'
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
  const [newExercise, setNewExercise] = useState<Exercise>({name: "", notes: ""})

  function handleInputChange(e : FormEvent) {
    const target = e.target as HTMLInputElement;
    setNewExercise({...newExercise, [target.name]: target.value});
  }

    function handleSubmit(e : FormEvent) {
    e.preventDefault();
    setExercises([...exercises, newExercise]);
    setNewExercise({name: "", notes: ""});
  }

  return (
    <>
    <NewExercise handleInputChange={handleInputChange} handleSubmit={handleSubmit} newExercise={newExercise} />
    <ExerciseList exercises={exercises} />
    </>
  )
}

export default App
