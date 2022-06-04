// import React from "react";
// import "./App.css";
// import "./media.css";
// import feather from "./images/feather.png";
// import attach from "./images/attach.png";

// // import ListItem from "./Components/ListItem";

// class App extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       listOfTasks: [],
//       currentValue: "",
//       isError: false,
//       isEdit: false,
//       activeId: null,
//     };
//   }
//   handleChange = (event) => {
//     this.setState({ currentValue: event.target.value });
//     this.setState({ isError: false });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     if (
//       (this.state.currentValue === "") |
//       this.state.listOfTasks.includes(this.state.currentValue)
//     ) {
//       this.setState({ isError: true });
//     } else {
//       let newListOfTasks = this.state.listOfTasks;
//       newListOfTasks.push(this.state.currentValue);
//       this.setState({ listOfItem: newListOfTasks });
//       const localStorageList =
//         JSON.parse(localStorage?.getItem("listTasks")) || [];
//       localStorage.setItem(
//         "listTasks",
//         JSON.stringify([...localStorageList, this.state.currentValue])
//       );
//     }
//     this.setState({ currentValue: "" });
//   };

//   handleDelete = (currIndex) => {
//     const filter = JSON.parse(localStorage?.getItem("listTasks")).filter(
//       (element, index) => index !== currIndex
//     );
//     this.setState({ listOfTasks: filter });
//     localStorage.setItem("listTasks", JSON.stringify(filter));
//   };

//   handleEdit = (currIndex) => {
//     this.setState({ isEdit: true, activeId: currIndex });
//     console.log(currIndex);
//   };

//   handleCanel = (event) => {
//     this.setState({ isEdit: false });
//   };

  
//   render() {
//   // console.log("this.state.activeId",this.state.activeId);

//     const listOfItem = JSON.parse(localStorage?.getItem("listTasks")) || [];
//     return (
//       <>
//         <img className="feather" src={feather} alt="feather" />
//         <section className="container">
//           <form className="head" onSubmit={this.handleSubmit}>
//             <input
//               value={this.state.currentValue}
//               type="text"
//               placeholder="enter you task"
//               className="inpHead"
//               onChange={this.handleChange}
//             />
//             <button className="btnHead"> add </button>
//           </form>

//           {this.state?.isError ? (
//             <span className="span-error">Warning</span>
//           ) : null}

//           {listOfItem.map((element, index) => (
//             <div className="lists">
//               <div className="listItem">
//                 <div className="box">
//                   {this.state?.isEdit  && (index === this.state.activeId)  ? (
//                     <>
//                       <div>
//                         {index}
//                         <input
//                           type="text"
//                           value={element}
//                           placeholder="Enter new task !"
//                           onChange={()=>{}}
//                         />
//                       </div>
//                       <div>
//                         <button className="btnUpdate">update</button>
//                         <button
//                           className="btnCancel"
//                           onClick={this.handleCanel}
//                         >
//                           cancel
//                         </button>
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <div>
//                         <p className="taskName">
//                           <input type={"checkbox"} />
//                           {element}
//                         </p>
//                       </div>
//                       <div>
//                         <button className="btnEdit" onClick={() => {
//                             this.handleEdit(index);
//                           }}>
//                           edit
//                         </button>
//                         <button
//                           className="btnDelete"
//                           onClick={() => this.handleDelete(index)}
//                         >
//                           delete
//                         </button>
//                       </div>
//                     </>
//                   )}
//                 </div>
//                 <img className="attach" src={attach} alt="attach" />
//               </div>
//             </div>
//           ))}
//         </section>
//       </>
//     );
//   }
// }

// export default App;
