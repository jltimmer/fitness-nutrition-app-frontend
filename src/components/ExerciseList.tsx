export interface Exercise {
  id? : number,
  name : string,
  notes : string
}

interface Props {
  exercises : Exercise[],
  handleDelete : (ex: Exercise) => void
}

function ExerciseList( { exercises, handleDelete } : Props) {
  return (
    <>
      {exercises.map(ex => (
        <div className="">
          <h4 className="d-md-inline-flex gap-3">{ex.name}
            <button className="btn btn-sm btn-close" type="button" onClick={() => handleDelete(ex)}></button>
          </h4>
          <p>{ex.notes}</p>
        </div>
      ))}
    </>
  );
}

export default ExerciseList
