import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from 'react';
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Button from "./components/Button";
import User from "./components/User";
import Address from "./components/Address";
import { Link } from "react-router-dom";

function App() {

  const [hideButton, setHideButton] = useState(true);
  const [title, setTitle] = useState('DB Assignment');

  const showAddTask = false;

  return (
    <Router>
      <div className="container">
        <Header title={title} updateShowSetTask={ () => { console.log('updateShowSetTask clicked'); } } showAddTask={true} />
        
        {hideButton && <Link to='/user'>
          <Button colour={!showAddTask ? 'green': 'red'} text='User' onClick={ () => { 
              setHideButton(false);
              console.log('User button clicked.'); 
            }} cssStyle='btn btn-block'/>
        </Link>}

        {hideButton && <Link to='/address'>
          <Button colour={!showAddTask ? 'green': 'red'} text='Address' onClick={ () => { 
            setHideButton(false);
            console.log('Address button clicked.'); 
          }} cssStyle='btn btn-block'/>
        </Link>}

        <Route path='/user' exact render={(props) => (
          <>
            <User setTitle={setTitle} setHideButton={setHideButton}/>
          </>
          )
        }/>
        <Route path='/address' exact component={Address} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
