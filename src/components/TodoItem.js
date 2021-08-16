import React from "react";

class TodoItem extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <li>
        {" "}
        <div>{todo.title}</div>
      </li>
    );
  }
}

export default TodoItem;
