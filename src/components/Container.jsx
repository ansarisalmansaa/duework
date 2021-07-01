import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config} from "../services";
function Container(props){

    const handleSubmit = async (e) => {
        e.preventDefault();
        const remove = `${baseURL}/${props.work.id}`;
        await axios.delete(remove, config);
        props.setToggleFetch((toggleFetch)=> !toggleFetch);
    }

    return(
       <div>
           <div id="containerHead">
           <h1>{props.work.fields.name}</h1>
           <h3>{props.work.fields.title}</h3>
           </div>
           <div>
               <p>{props.work.fields.description}</p>
               <h4>{props.work.fields.dueDate}</h4>
           </div>
           <button onClick={handleSubmit}>REMOVE</button>
       </div>
    )
}

export default Container;