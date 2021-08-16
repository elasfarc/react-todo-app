import React from "react";
class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        title: "Edit Me!!",
      },
      error: null,
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
    console.log(title, !!title.trim());
    // (!title.trim() && this.setState({ error: "ERRRRRR" })) ||
    //   (addItem(title) && this.setState({ todo: { title: "" } }));
    if (title.trim()) {
      addItem(title);
      this.setState({ todo: { title: "" }, error: null });
    } else {
      this.setState({ error: "Item can not be empty" });
    }
  }
  handleChange(event) {
    const userInput = event.target.value;
    this.setState({
      todo: { [event.target.name]: userInput.toUpperCase() },
    });
  }
  render() {
    const {
      todo: { title },
      error,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {error ? <p>{error}</p> : null}
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
