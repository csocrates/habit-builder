import React from 'react';
import './App.css';
import AddHabit from './components/AddHabit';
import HabitList from './components/HabitList';

class App extends React.Component {
  state = { user: 'Caleb', currentHabits: [] };
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          Welcome Back {this.state.user}
          <h1>The Good Habit Builder</h1>
          <AddHabit addNewHabit={this.addNewHabit} />
          <HabitList currentHabits={this.state.currentHabits} />
        </header>
      </div>
    );
  }

  addNewHabit = (newHabit) => {
    this.setState(
      (currentState) => {
        return { currentHabits: [...currentState.currentHabits, newHabit] };
      },
      () => {
        console.log(this.state);
      }
    );
  };
}

export default App;
