import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, handleChange, handleDelete, editItem } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChange={handleChange}
            handleDelete={handleDelete}
            editItem={editItem}
          />
        ))}
      </ul>
    );
  }
}
export default TodosList;
