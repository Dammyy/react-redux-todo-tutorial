import React from "react";
import TodoListView from "./TodoListView";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    const { addNewTodoItems } = this.props;
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };

    addNewTodoItems(newItem);

    this.setState((state) => ({
      text: "",
    }));
  }

  render() {
    const { todoItems, deleteItems } = this.props;
    return (
      <div>
        <h3>TODO</h3>
        <TodoListView items={todoItems} />

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
        <button onClick={deleteItems}>Clear Items</button>
      </div>
    );
  }
}

export default App;
