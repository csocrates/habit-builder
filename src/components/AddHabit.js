import React from "react";

class AddHabit extends React.Component {
  state = { habit: "", frequency: "" };
  render() {
    return (
      <form>
        <label>
          Add your habit here:
          <input type="text" id="new-habit" />
        </label>
        <label>
          Frequency:
          <select id="frequencyList">
            <option value="1">10 times a day</option>
            <option value="2">5 times a day</option>
            <option value="3">Twice Daily</option>
            <option value="4">Daily</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddHabit;
