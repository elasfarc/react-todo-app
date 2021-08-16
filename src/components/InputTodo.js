import React from "react";
class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        title: "Edit Me!!",
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    const {
      todo: { title },
    } = this.state;
    event.preventDefault();
    const { addItem } = this.props;
    addItem(title);
    this.setState({ todo: { title: "" } });
  }
  handleChange(event) {
    const userInput = event.target.value;
    this.setState({ todo: { [event.target.name]: userInput.toUpperCase() } });
  }
  render() {
    const {
      todo: { title },
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="addItemInput">Add an item</label>
          <input
            id="addItemInput"
            name="title"
            type="text"
            value={title}
            onChange={this.handleChange}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
