
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import { baseURL,config } from './services';
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Container from './components/Container';



function App() {
  const [duework, setDuework]= useState([]);
const [toggleFetch, setToggleFetch] = useState(true);
    useEffect(() => {
      const fetchDuework= async () => {
        
        const resp = await axios.get(baseURL, config);
       setDuework(resp.data.records);
      }
      fetchDuework();
    },[toggleFetch]);// Will only run on mount
  return (
    <div className="App">
     <Navbar/>
     <Route exact path="/">
       <main>
     <div id="welcome">
      <h1>Welcome To <span>Due</span> <span>WORK</span> APP</h1>
     </div>
     <div id="formImg">
       <Link to="/new">Form</Link>
      <h3>Here is what you have Due!</h3>

      {duework.map((work)=> (
      <Container setToggleFetch={setToggleFetch} work={work}/>
      ))}
      
     </div>
     
     
       </main>
     </Route>
     <Route path="/new">
       <Form setToggleFetch={setToggleFetch}/>
     </Route>
    </div>
  );
}

export default App;
