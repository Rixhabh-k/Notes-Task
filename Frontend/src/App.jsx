import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [note, setNote] = useState([]);

  function fetchNotes() {
    axios.get("/api/notes").then((res) => {
      console.log(res.data);

      setNote(res.data.note);
    });
  }

  useEffect(()=>{
    fetchNotes()
  },[])

  

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function formHandler(e) {
    e.preventDefault();
    
    const {title,description} = e.target.elements
    console.log(title.value);

    axios.post('/api/notes',{
      title: title.value,
      description: description.value
    }).then((res)=>{
      console.log(res.data);
      fetchNotes()
    })

    setTitle('')
    setDescription('')
  }

  function deleteHandler(noteId){
    axios.delete("/api/notes/"+noteId).then((res)=>{
      fetchNotes()
    })
  }
  return (
    <div id="main">
      <div className="heading">
        <h1>Notes App</h1>
      </div>
      <div className="form-container">
        <form
          onSubmit={(e) => {
            formHandler(e);
          }}
        >
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button>Create Note</button>
        </form>
      </div>
      <div className="notes">
        {note.map((note, idx) => {
          return (
            <div key={idx} className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={()=>{
                deleteHandler(note._id)
              }}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
