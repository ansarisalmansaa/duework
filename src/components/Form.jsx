import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import "./Form.css";
function Form(props) {
  console.log(props.duework);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState();
  const history = useHistory();
  // useEffect(()=>{
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      name,
      title,
      description,
      dueDate,
    };
    await axios.post(baseURL, { fields: newPost }, config);

    props.setToggleFetch((current) => !current);

    history.push("/");
  };
  // }});

  return (
    <div>
      <div id="welcome">
        <h1>
          Welcome To <span id="due">Due</span>
          <span id="work">WORK</span> APP
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <h1 id="formHead">FORM</h1>
        <label id="formL" htmlFor="">
          Project Name:
        </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label id="formL" htmlFor="">
          Title:
        </label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <label id="formL" htmlFor="">
          Description:
        </label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
        <label id="formL" htmlFor="">
          Due Date:
        </label>
        <input type="Date" onChange={(e) => setDueDate(e.target.value)} />
        <button>
          <h1 id="btnh">+</h1>
        </button>
      </form>
    </div>
  );
}

export default Form;
