import { FormEvent, useEffect, useState } from 'react'
import ExerciseList, { Exercise } from './ExerciseList'
import NewExercise from './NewExercise';
import axios from 'axios'
import Modal from './Modal';

function Fitness() {
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
      <button onClick={() => setIsOpen(true)}>Add Exercise</button>
      { isOpen ? <Modal content={modalContent} /> :
        <ExerciseList exercises={exercises} handleDelete={handleDelete} />}
    </>
  )
}

export default Fitness
