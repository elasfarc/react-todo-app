import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo, handleChange, handleDelete } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={Boolean(todo.completed)}
          onChange={() => handleChange(todo.id)}
        ></input>
        {todo.title}
        <button type="button" onClick={() => handleDelete(todo.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
