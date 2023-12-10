import { FormEvent, useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ExerciseList, { Exercise } from './components/ExerciseList'
import NewExercise from './components/NewExercise';
import axios from 'axios'
import Modal from './components/Modal';

function App() {
  const rootURL = 'http://localhost:8000/exercises/';
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [newExercise, setNewExercise] = useState<Exercise>({name: "", notes: ""})
  const [isOpen, setIsOpen] = useState<boolean>(false)

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

  const modalContent = <><div className="title">
          <h1>New Exercise</h1>
        </div>
        <div className="body">
          {<NewExercise handleInputChange={handleInputChange} handleSubmit={handleSubmit} newExercise={newExercise} />}
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </div>
        <div className="footer">
        </div></>

  return (
    <>
    {/* <nav className="navbar"> */}
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/exercises'}>Exercises</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercises" element={
        <>
          <button onClick={() => setIsOpen(true)}>Add Exercise</button>
          { isOpen ? <Modal content={modalContent} /> :
            <ExerciseList exercises={exercises} handleDelete={handleDelete} />}
        </>}
      />
    </Routes>
    </>
  )
}

function Home() {
  return (
    <p>Home</p>
  )
}

export default App
