import React from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMood: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.exitEditMood = this.exitEditMood.bind(this);
  }

  handleEdit() {
    this.setState((state) => ({ editMood: !state.editMood }));
  }
  exitEditMood(e) {
    if (e.key === "Enter") this.setState({ editMood: false });
  }

  render() {
    const { todo, handleChange, handleDelete, editItem } = this.props;
    const { editMood } = this.state;
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    return (
      <li className={styles.item}>
        <div
          style={editMood ? { display: "none" } : null}
          onDoubleClick={this.handleEdit}
        >
          <input
            type="checkbox"
            checked={Boolean(todo.completed)}
            onChange={() => handleChange(todo.id)}
            className={styles.checkbox}
          ></input>
          <span style={todo.completed ? completedStyle : null}>
            {todo.title}
          </span>
          <button type="button" onClick={() => handleDelete(todo.id)}>
            Delete
          </button>
        </div>
        <input
          style={editMood ? null : { display: "none" }}
          className={styles.textInput}
          type="text"
          value={todo.title}
          onChange={(e) => editItem(todo.id, e.target.value)}
          onKeyDown={this.exitEditMood}
        ></input>
      </li>
    );
  }
}

export default TodoItem;
