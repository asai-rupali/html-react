import './App.css';
import Nav from './components/NavBar/Nav';
import WebArticle from './components/Article/WebArticle';
import AsideBlog from './components/Aside/AsideBlog';
import Menu from './components/NavBar/Menu';
import {BrowserRouter as Router,Switch,Route,NavLink,Link} from "react-router-dom";
import { useState } from 'react';




function App(props) {
  // const [isCancel,setIsCancel] = useState(false);
  // const stopCancelingHandler = () =>{
  //   setIsCancel(true);
  // }
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <WebArticle /> 
        <AsideBlog />
        {/* {!isCancel && <WebArticle onCancel={stopCancelingHandler} />}
        {!isCancel && <AsideBlog onCancel={stopCancelingHandler} />} */}
       
        
       
      </div>
    </div>
  );
}

export default App;
