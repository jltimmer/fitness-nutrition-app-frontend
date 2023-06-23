import { FormEvent } from 'react'
import { Exercise } from './ExerciseList'

interface Props {
  handleInputChange : (e : FormEvent) => void
  handleSubmit : (e : FormEvent) => void
  newExercise : Exercise
}

function NewExercise( { handleInputChange, handleSubmit, newExercise } : Props) {

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
