import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo, handleChange } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={Boolean(todo.completed)}
          onChange={() => handleChange(todo.id)}
        ></input>
        {todo.title}
      </li>
    );
  }
}

export default TodoItem;
