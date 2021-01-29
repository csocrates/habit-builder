const HabitList = (props) => {
  const habits = Object.entries(props.currentHabits);

  return (
    <section>
      <h2>Your Current Habits:</h2>
      <ul id='habits-list'>
        {habits.map(([habit, { frequency }]) => {
          return (
            <li key={habit}>
              Don't forget to {habit} {frequency} more times today!
              <button
                onClick={() => {
                  props.handleHabitDone(habit);
                }}
              >
                Click when done!
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HabitList;
