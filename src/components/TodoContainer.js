import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "Setup development environment",
          completed: true,
        },
        {
          id: 2,
          title: "Develop website and add content",
          completed: false,
        },
        {
          id: 3,
          title: "Deploy to live server",
          completed: false,
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
  render() {
    const { todos } = this.state;
    return (
      <>
        <Header />
        <TodosList
          todos={todos}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}
