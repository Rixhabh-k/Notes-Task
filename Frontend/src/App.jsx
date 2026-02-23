import React, { useState } from "react";

const App = () => {
  const [note, setNote] = useState([
    {
      title: "Learn React",
      description: "Understand components, props, state, and hooks in React.",
    },
    {
      title: "Build Notes App",
      description:
        "Create a simple CRUD notes application using React and Node.js.",
    },
    {
      title: "Practice DSA",
      description: "Solve 2 array and 2 string problems daily.",
    },
    {
      title: "Workout",
      description: "30 minutes of cardio and strength training.",
    },
    {
      title: "Read Book",
      description: "Read 20 pages of a self-improvement book.",
    },
  ]);

  const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

  function formHandler(e){
    
    e.preventDefault()
  }
  return (
    <div id="main">
      <div className="heading">
        <h1>Notes App</h1>
      </div>
      <div className="form-container">
        <form onSubmit={(e)=>{
          formHandler(e)
        }}>
          <input type="text" placeholder="Title" value={title} onChange={(e)=>{
            setTitle(e.target.value)
          }} />
          <input type="text" placeholder="Description" value={description} onChange={(e)=>{
            setDescription(e.target.value)
          }} />
          <button>Create Note</button>
        </form>
      </div>
      <div className="notes">
        {note.map((note, idx) => {
          return (
            <div key={idx} className="note">
              <h1>{note.title}</h1>
              <p>
                {note.description}
              </p>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
