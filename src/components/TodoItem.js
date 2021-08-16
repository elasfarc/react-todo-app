import React from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo, handleChange, handleDelete } = this.props;
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          checked={Boolean(todo.completed)}
          onChange={() => handleChange(todo.id)}
          className={styles.checkbox}
        ></input>
        <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
        <button type="button" onClick={() => handleDelete(todo.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
