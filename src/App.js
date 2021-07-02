
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import formbtn from './images/formbtn.png';
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
      <h1>Welcome To <span id="due">Due</span><span id="work">WORK</span> APP</h1>
     </div>
      <h3 id="dueHead">Here is what you have Due!</h3>
     <div id="formImg">
       <Link to="/new"><img src={formbtn} alt="image" /></Link>

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
