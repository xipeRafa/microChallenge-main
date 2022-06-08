import React from "react";
import "./styles.css";
import { Fragment, useState } from "react";

export default function App() {
  const [state, setState] = useState({
    text: ""
  });

  const { text } = state;

  const handleState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const [arr, setArr] = useState([]);

  const handleArr = () => {
    setArr([...arr, state]);
    setArrFinder([...arrFinder, state]);
  };
  /*  state.toggle ? :  */

  console.log("arr:", arr);

  const sendForm = (e) => {
    e.preventDefault();

    handleArr();

    if (edit) {
      setArr(arr.map((el) => (el.id === state.id ? state : el)));
      setArrFinder(arrFinder.map((el) => (el.id === state.id ? state : el)));
      setEdit(null);
    } else {
      state.id = Date.now();
      state.toggle = false;
    }
    setState({ text: "" });
  };

  const deleteItem = (id) => {
    setArr(arr.filter((el) => el.id !== id));
    setArrFinder(arrFinder.filter((el) => el.id !== id));
  };

  const [edit, setEdit] = useState(null);
  console.log("edit", edit);

  const editItem = (up) => {
    setState(up);
    setEdit(up);
  };

  const toggle = (id) => {
  
      arr.map((el) => (el.id === id ? (el.toggle = !el.toggle) : el.toggle))
  
  };

  const [finder, setFinder] = useState("");
  const [arrFinder, setArrFinder] = useState([]);

  const handleSearch = (e) => {
    setFinder(e.target.value);
    setArr(arrFinder.filter((el) => el.text.indexOf(finder) > -1));
  };

  const showAll = () => {
    setArr(arrFinder.filter((el) => el));
  };

  const showActive = () => {
    setArr(arrFinder.filter((el) => el.toggle === false));
  };

  const showCompleted = () => {
    setArr(arrFinder.filter((el) => el.toggle === true));
  };

  const clearCompleted = () => {
    setArr(arr.filter((el) => el.toggle === false));
    setArrFinder(arrFinder.filter((el) => el.toggle === false));
  };
  const act = () => {
    let e = arr.filter((el) => el.toggle === false);
    return e;
  };

  return (
    <Fragment>
      <input placeholder="search" onKeyDown={handleSearch} />

      <form onSubmit={sendForm}>
        <input
          autoComplete="off"
          name="text"
          onChange={handleState}
          value={text}
        />

        <button type="submit"> {edit ? "Save Edit" : "To Do"} </button>
      </form>

      <button onClick={showAll}>Show All</button>
      <button onClick={showActive}>Active</button>
      <button onClick={showCompleted}>Completed</button>
      <button onClick={clearCompleted}>Clear Completed</button>

      {
        <div className="active" key={arr.text}>
          <p>Actives: {act().length} </p>
        </div>
      }

      {arr.map((el) => (
        <div key={el.id}>
          <p>{el.text}</p>
          <button onClick={() => deleteItem(el.id)}>Delete</button>
          <button onClick={() => editItem(el)}>Edit</button>
          <label htmlFor={el.id}>Completed</label>
          <input type="checkbox" id={el.id} onClick={() => toggle(el.id)} />
        </div>
      ))}
    </Fragment>
  );
}

setTimeout(() => {
  
}, 1000);

/* css----------------------------------css */

/* 
.App {
  font-family: sans-serif;
  text-align: center;
}
body{
  margin-left: 10%;
  width: 80%;
  background-color: rgba(245, 245, 220, 0.499);
}
div>div{
  border:1px solid darkred;
  margin-bottom: 10px;
}
p{
  background-color: lightgray;
  font-family: sans-serif;
  padding: 10px;
  margin:10px;
  letter-spacing: .6px;
}
button{
  margin: 10px;
}

*/




/* 

import { useState } from "react";
import "./styles.css";

export default function App() {
 
let arr = ['Work', 'Home', 'school','meme','mujata'];

  const [val, setVal]=useState('');

  const handleSelect = (e) => {
    let x = Number(e.target.value);
    let y = x + 1;
    let v = arr.slice(x, y)
    setVal(v)
  }
  
  return (
    <>
      <select onChange={e => handleSelect(e)}>
        {arr.map((el, i) => (
          <option key={i} value={i}>{el}</option>
        ))}
      </select>

      {
        <p>{val}</p>
      } 
    </>
  )
}

*/





