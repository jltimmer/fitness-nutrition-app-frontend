import { FormEvent, useState } from 'react'
import { Exercise } from './ExerciseList'

interface Props {
  exercises : Exercise[]
  setExercises: any
}

function NewExercise( {exercises, setExercises} : Props) {
const [newExercise, setState] = useState<Exercise>({name: "", notes: ""});

function handleInputChange(e : FormEvent) {
  const target = e.target as HTMLInputElement;
  setState({...newExercise, [target.name]: target.value});
}

function handleSubmit(e : FormEvent) {
  e.preventDefault();
  setExercises([...exercises, newExercise]);
}

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="mb-3">
        <label className="form-label">Exercise Name
          <input
            name="name"
            type="text"
            className="form-control"
            id="exerciseName"
            value={newExercise["name"]}
            onChange={handleInputChange}
            />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label">Notes
          <input
            name="notes"
            type="text"
            className="form-control"
            id="exerciseNotes"
            value={newExercise["notes"]}
            onChange={handleInputChange}
            />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  );
}

export default NewExercise
