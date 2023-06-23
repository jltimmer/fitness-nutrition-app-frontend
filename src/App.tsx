import { FormEvent, useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ExerciseList, { Exercise } from './components/ExerciseList'
import NewExercise from './components/NewExercise';
import axios from 'axios'

function App() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [newExercise, setNewExercise] = useState<Exercise>({name: "", notes: ""})

  useEffect(() => {
    refreshExerciseList();
    }, [])

  function refreshExerciseList() {
    axios.get('http://localhost:8000/')
      .then((res) => setExercises(res.data))
      .catch((err) => console.log(err))
  };

  function handleInputChange(e : FormEvent) {
    const target = e.target as HTMLInputElement;
    setNewExercise({...newExercise, [target.name]: target.value});
  }

    function handleSubmit(e : FormEvent) {
    e.preventDefault();
    axios.post('http://localhost:8000/', {name: newExercise.name, notes: newExercise.notes})
      .then((res) => refreshExerciseList());

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
