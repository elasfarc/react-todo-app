import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}
export default TodosList;
