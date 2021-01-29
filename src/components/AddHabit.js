import React from 'react';

class AddHabit extends React.Component {
  state = { habit: '', frequency: 0 };

  handleInput = ({ target: { value, id } }) => {
    this.setState((currentState) => {
      return { [id]: value };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newHabit = { ...this.state };
    this.props.addNewHabit(newHabit);
    this.setState({ habit: '', frequency: 0 });
  };

  render() {
    return (
      <form>
        <label>
          Add your habit here:
          <input
            type='text'
            id='habit'
            onChange={this.handleInput}
            value={this.state.habit}
          />
        </label>
        <label>
          Frequency:
          <select
            id='frequency'
            onChange={this.handleInput}
            value={this.state.frequency}
          >
            <option>Select frequency</option>
            <option value={10}>10 times a day</option>
            <option value={5}>5 times a day</option>
            <option value={2}>Twice Daily</option>
            <option value={1}>Daily</option>
          </select>
        </label>
        <button type='submit' onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default AddHabit;
