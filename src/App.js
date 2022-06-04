import React from "react";
import "./App.css";
import "./media.css";
import feather from "./images/feather.png";
// import attach from "./images/attach.png";
import ListItem from "./Components/ListItem";

// import ListItem from "./Components/ListItem";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      listOfTasks: [],
      currentValue: "",
      isError: false,
      isEdit: false,
      activeId: null,
    };
  }
  handleChange = (event) => {
    this.setState({ currentValue: event.target.value });
    this.setState({ isError: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (
      (this.state.currentValue === "") |
      this.state.listOfTasks.includes(this.state.currentValue)
    ) {
      this.setState({ isError: true });
    } else {
      let newListOfTasks = this.state.listOfTasks;
      newListOfTasks.push(this.state.currentValue);
      this.setState({ listOfItem: newListOfTasks });
      const localStorageList =
        JSON.parse(localStorage?.getItem("listTasks")) || [];
      localStorage.setItem(
        "listTasks",
        JSON.stringify([...localStorageList, this.state.currentValue])
      );
    }
    this.setState({ currentValue: "" });
  };

  changeState = (stateS) => {
    this.setState(stateS);
  };

  render() {

    const listOfItem = JSON.parse(localStorage?.getItem("listTasks")) || [];
    return (
      <>
        <img className="feather" src={feather} alt="feather" />
        <section className="container">
          <form className="head" onSubmit={this.handleSubmit}>
            <input
              value={this.state.currentValue}
              type="text"
              placeholder="enter you task"
              className="inpHead"
              onChange={this.handleChange}
            />
            <button className="btnHead"> add </button>
          </form>

          {this.state?.isError ? (
            <span className="span-error">Warning</span>
          ) : null}

          {listOfItem.map((element, index) => (
            <ListItem
              prams={{ element, index }}
              isError={this.state.isError}
              // isChecked={this.state.isChecked}
              changeState={this.changeState}
            />
          ))}
        </section>
      </>
    );
  }
}

export default App;
