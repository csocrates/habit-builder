const HabitList = (props) => {
  return (
    <section>
      <h2>Your Current Habits:</h2>
      <ul id="habits-list">
        {props.currentHabits.map((habit) => {
          return (
            <li key={habit.habit}>
              {habit.habit} Target: {habit.frequency}
              <button>Click when done!</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HabitList;
