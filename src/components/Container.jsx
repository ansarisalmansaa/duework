import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";
import "./Container.css";
function Container(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const remove = `${baseURL}/${props.work.id}`;
    await axios.delete(remove, config);
    props.setToggleFetch((toggleFetch) => !toggleFetch);
  };

  return (
    <div class="container">
      <div id="containerHead">
        <h2>{props.work.fields.name}</h2>
        <h4>{props.work.fields.title}</h4>
      </div>
      <div>
        <p>{props.work.fields.description}</p>
        <h5>{props.work.fields.dueDate}</h5>
      </div>
      <button id="removeBtn" onClick={handleSubmit}>
        REMOVE
      </button>
    </div>
  );
}

export default Container;
