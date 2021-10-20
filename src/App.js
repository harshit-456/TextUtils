
import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');//whether dark mode is enabled or not
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{setAlert(null);} 
    ,3000 );
  }
  const toggleMode=()=>{
if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode has been enabled","success");
    document.title("TextUtilis Dark Mode");
}
    else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title("TextUtilis Light Mode");
    }

  }
  return (
    <>

<Router>
  <Navbar title="TextUtils Blog" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}
/>
  <div className="container" my-3="true">
  <Switch>
          <Route exact path="/about">
            <About />
          </Route>
      
          <Route exact path="/">
                   
  <TextForm  heading="Enter the Text To Analyse" mode={mode} showAlert={showAlert}></TextForm>
          </Route>
        </Switch>
          
  </div>
 </Router>

   </> 
  );
}

export default App;
