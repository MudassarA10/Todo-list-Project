import React from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
const App = () => {
  const [alltodo, setAlltodo] = useState([]);
  const [newjob, setNewjob] = useState("");
  const [newdescription, setNewdescription] = useState("");
  const [show, setShow] = useState(false);

  function Handlejob(e) {
    e.preventDefault();
    setNewjob(e.target.value);
  }
  function HandleDescription(e) {
    e.preventDefault();
    setNewdescription(e.target.value);
  }

  function HandleShow() {
    let todoItem = {
      title: newjob,
      description: newdescription,
      show: false,
    };

    const Data = [...alltodo];
    Data.push(todoItem);
    localStorage.setItem("todo data", JSON.stringify(Data));
    setAlltodo(Data);
    setNewjob("");
    setNewdescription("");
  }

  function Handledelete(index) {
    const deleteData = [...alltodo];
    deleteData.splice(index, 1);
    localStorage.setItem("todo data", JSON.stringify(deleteData));
    setAlltodo(deleteData);
  }
  function Completed(index) {
    setShow(true);
    alert("congratulation 🎉 this task is completed!");
  }

  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title:</label>
            <input
              type="text"
              value={newjob}
              placeholder="What's the title of your To Do?"
              onChange={Handlejob}
            />
          </div>
          <div className="todo-input-item">
            <label>Description:</label>
            <input
              type="text"
              value={newdescription}
              placeholder="What's the title of your To Do?"
              onChange={HandleDescription}
            />
          </div>
          <div className="todo-input-item">
            <button className="primary-btn" type="button" onClick={HandleShow}>
              Add
            </button>
          </div>
        </div>
        {/* <div className="btn-area">
          <button className="secondaryBtn">To Do</button>
          <button className="secondaryBtn">Completed</button>
        </div> */}
        <div className="todo-list">
          {alltodo.map((item, index) => {
            return (
              <div className="todo-list-item " key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div>
                  <AiOutlineDelete
                    className="icon"
                    title="Delete?"
                    onClick={() => Handledelete(index)}
                  />
                  <BsCheckLg
                    className="check-icon"
                    title="Complete?"
                    onClick={() => Completed(index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
