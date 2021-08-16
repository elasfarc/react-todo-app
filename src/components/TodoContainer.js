import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }
  async componentDidMount() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const todos = await response.json();
    console.log(todos);
    this.setState({ todos });
  }
  handleChange(itemID) {
    // const { todos } = this.state;
    // let todo = todos.find((todo) => todo.id === itemID);
    // todo.completed = !todo.completed;
    //this.setState({ todos });

    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === itemID) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }
  handleDelete(itemID) {
    this.setState((state) => {
      let todos = state.todos.filter((todo) => todo.id !== itemID);
      return { todos };
    });
  }
  addItem(data) {
    const newItem = { id: uuidv4(), title: data, completed: false };
    this.setState((state) => ({ todos: [...state.todos, newItem] }));
  }
  editItem(itemID, updatedMsg) {
    this.setState((state) => {
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === itemID) todo.title = updatedMsg;
          return todo;
        }),
      };
    });
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addItem={this.addItem} />
          <TodosList
            todos={todos}
            handleChange={this.handleChange}
            handleDelete={this.handleDelete}
            editItem={this.editItem}
          />
        </div>
      </div>
    );
  }
}
