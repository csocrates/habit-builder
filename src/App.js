import React from "react";
import "./App.css";
import AddHabit from "./components/AddHabit";
import HabitList from "./components/HabitList";

class App extends React.Component {
  state = { user: "Caleb", currentHabits: {} };

  componentDidMount() {
    this.fetchHabits();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome Back {this.state.user}
          <h1>The Good Habit Builder</h1>
          <AddHabit addNewHabit={this.addNewHabit} />
          <HabitList
            currentHabits={this.state.currentHabits}
            handleHabitDone={this.handleHabitDone}
          />
          <button onClick={this.handleSave}>Save your habits</button>
        </header>
      </div>
    );
  }

  handleHabitDone = (habit) => {
    this.setState((currentState) => {
      const newFreq = currentState.currentHabits[habit].frequency;

      if (newFreq)
        return {
          currentHabits: {
            ...currentState.currentHabits,
            [habit]: { frequency: newFreq - 1 },
          },
        };
    });
  };

  addNewHabit = (newHabit) => {
    this.setState(
      (currentState) => {
        return {
          currentHabits: {
            ...currentState.currentHabits,
            [newHabit.habit]: { frequency: newHabit.frequency },
          },
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleSave = () => {
    localStorage.setItem(
      "currentHabits",
      JSON.stringify(this.state.currentHabits)
    );
  };
  fetchHabits = () => {
    const currentHabits = JSON.parse(localStorage.getItem("currentHabits"));
    console.log(currentHabits);
    this.setState(() => {
      return { currentHabits };
    });
  };
}

export default App;
