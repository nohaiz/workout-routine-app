function App() {

  const workoutRoutine = [
    {name: 'Push-ups', completed: true},
    {name: 'Sit-ups', completed: false},
    {name: 'Squats', completed: true},
    {name: 'Lunges', completed: false},
    {name: 'Burpees', completed: true}
  ];
  
  return (
    <>
      <h1>Workout Routine</h1>
      <ul>
        {workoutRoutine.map((exercise, index) => 
          <li 
            key={index} 
            className={exercise.completed ? 'completed' : 'incomplete'}
          >
            {exercise.name}
          </li>
        )}
      </ul>
    </>
  )
}

export default App;
