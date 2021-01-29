import React from "react";
import "./App.css";
import AddHabit from "./components/AddHabit";

class App extends React.Component {
  state = { user: "Caleb", currentHabits: [] };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome Back {this.state.user}
          <h1>The Good Habit Builder</h1>
          <AddHabit />
        </header>
      </div>
    );
  }
}

export default App;
