interface Exercise {
  id : number,
  name : string,
  notes : string
}

interface Props {
  exercises : Exercise[]
}

function ExerciseList( { exercises } : Props) {
  return (
    <>
      {exercises.map(ex => (
        <div>
          <h4>{ex.name}</h4>
          <p>{ex.notes}</p>
        </div>
      ))}
    </>
  )
}

export default ExerciseList
