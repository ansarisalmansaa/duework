
import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { baseURL, config } from "../services";
function Form(props){
    console.log(props.duework)
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate]=useState();
    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            name,
            title,
            description, 
            dueDate, 
          };
          await axios.post(baseURL, {fields: newPost}, config);
              
              history.push("/")
          
    }

    return(
       <form onSubmit={handleSubmit}>
           
           <h1>FORM</h1>
           <label htmlFor="">Project Name:</label>
           <input type="text" onChange={(e)=> setName(e.target.value)}/>
           <label htmlFor="">Title:</label>
           <input type="text" onChange={(e)=> setTitle(e.target.value)}/>
           <label htmlFor="">Description:</label>
           <input type="text"onChange={(e)=> setDescription(e.target.value)}/>
           <label htmlFor="">Due Date:</label>
           <input type="Date" onChange={(e)=> setDueDate(e.target.value)}/>
           <button>+</button>
       </form>
    )
}

export default Form;