import { FormEvent, useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ExerciseList, { Exercise } from './components/ExerciseList'
import NewExercise from './components/NewExercise';
import axios from 'axios'

function App() {
  const rootURL = 'http://localhost:8000/exercises/';
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [newExercise, setNewExercise] = useState<Exercise>({name: "", notes: ""})

  useEffect(() => {
    refreshExerciseList();
    }, [])

  function refreshExerciseList() {
    axios.get(rootURL)
      .then((res) => setExercises(res.data))
      .catch((err) => console.log(err))
  };

  function handleInputChange(e : FormEvent) {
    const target = e.target as HTMLInputElement;
    setNewExercise({...newExercise, [target.name]: target.value});
  }

  function handleSubmit(e : FormEvent) {
    e.preventDefault();
    axios.post(rootURL, {name: newExercise.name, notes: newExercise.notes})
      .then((res) => refreshExerciseList());

    setNewExercise({name: "", notes: ""});
  }

  function handleDelete(exercise : Exercise) {
    console.log(exercise.id)
    axios.delete(`${rootURL}${exercise.id}/`)
      .then((res) => refreshExerciseList());
  }

  return (
    <>
    <NewExercise handleInputChange={handleInputChange} handleSubmit={handleSubmit} newExercise={newExercise} />
    <ExerciseList exercises={exercises} handleDelete={handleDelete} />
    </>
  )
}

export default App
