import React from "react";
import "../App.css";
import "../media.css";
import attach from "../images/attach.png";

export default class ListItem extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isEdit: false,
      newValue: "",
      isChecked: false,
    };
  }

  handleDelete = (currIndex) => {
    const filter = JSON.parse(localStorage?.getItem("listTasks")).filter(
      (element, index) => index !== currIndex
    );
    this.props.changeState({ listOfTasks: filter });
    localStorage.setItem("listTasks", JSON.stringify(filter));
  };

  handleEdit = () => {
    this.setState({ isEdit: true });
  };

  handleCanel = () => {
    this.setState({ isEdit: false, newValue: ""});
    this.props.changeState({ isError: false });
  };

  handleUpdate = (currIndex) => {
    const localList = JSON.parse(localStorage?.getItem("listTasks"));

    if (
      (this.state.newValue === "") |
      localList.includes(this.state.newValue)
    ) {
      this.props.changeState({ isError: true });
    } else {
      // console.log(localList);
      localList.map((element, index) => {
        if (index === currIndex) {
          localList[index] = this.state.newValue;
        }
        return localList;
      });
      this.props.changeState({ listOfTasks: localList });
      console.log(localList);
      localStorage.setItem("listTasks", JSON.stringify(localList));
      this.setState({ isEdit: false });
    }
  };

  handleChecked = (event) => {
    this.setState({ isChecked: event.target.checked });
  };

  handleChange = (e) => {
    this.setState({ newValue: e.target.value });
  };
  render() {
    return (
      <div className="lists">
        <div className="listItem">
          <div className="box">
            {this.state?.isEdit ? (
              <>
                <div>
                  <input
                    className="inpUpdate"
                    type="text"
                    value={this.state.newValue}
                    placeholder="Enter new task !"
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <button
                    className="btnUpdate"
                    onClick={() => {
                      this.handleUpdate(this.props.prams.index);
                    }}
                  >
                    update
                  </button>
                  <button className="btnCancel" onClick={this.handleCanel}>
                    cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p className={this.state.isChecked ? "lineThrough" : ""}>
                    <input type={"checkbox"} onChange={this.handleChecked} />
                    {this.props.prams.element}
                  </p>
                </div>
                <div>
                  <button className="btnEdit" onClick={this.handleEdit}>
                    edit
                  </button>
                  <button
                    className="btnDelete"
                    onClick={() => this.handleDelete(this.props.prams.index)}
                  >
                    delete
                  </button>
                </div>
              </>
            )}
          </div>
          <img className="attach" src={attach} alt="attach" />
        </div>
      </div>
    );
  }
}
