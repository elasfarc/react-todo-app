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
      <>
        {error ? (
          <p style={{ color: "red", marginBottom: "1em", paddingLeft: "4em" }}>
            {error}
          </p>
        ) : null}
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div className="input-text">
            <label htmlFor="addItemInput">Add an item</label>
            <input
              id="addItemInput"
              name="title"
              type="text"
              value={title}
              onChange={this.handleChange}
            ></input>
          </div>
          <button className="input-submit" type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}
export default InputTodo;
