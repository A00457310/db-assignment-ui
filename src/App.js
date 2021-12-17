import Header from "./components/Header";
import { useState } from 'react';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Button from "./components/Button";
import User from "./components/User";
import Address from "./components/Address";
import BusDelay from "./components/BusDelay";
import FrequentAddress from "./components/FrequentAddress";
import Hazard from "./components/Hazard";
import Obstruction from "./components/Obstruction";
import Query from "./components/Query";
import Response from "./components/response";
import UserQuery from "./components/UserQuery";
import UserResponse from "./components/UserResponse";
import TransitIssue from "./components/TransitIssue";
import UserTransitIssue from "./components/UserTransitIssue";
import MostFrequentIssues from "./components/MostFrequentIssues";
import { Link } from "react-router-dom";

function App() {

  const [hideButton, setHideButton] = useState(true);
  const [title, setTitle] = useState('DB Assignment');

  const [showAddTask, setShowAddTask] = useState(false);

  const toggleShowAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  const toggleHideButton = () => {
    setHideButton(!hideButton);
  };

  return (
    <Router>
      <div className="container">
        <Header title={title} setTitle={setTitle} toggleShowAddTask={toggleShowAddTask} toggleHideButton={toggleHideButton} updateShowSetTask={() => { console.log('updateShowSetTask clicked'); }} showAddTask={showAddTask} />

        {hideButton && <Link to='/user'>
          <Button colour='green' text='User' onClick={() => {
            setHideButton(false);
            console.log('User button clicked.');
          }} cssStyle='btn btn-block' />
        </Link>}

        {hideButton && <Link to='/address'>
          <Button colour='green' text='Address' onClick={() => {
            setHideButton(false);
            console.log('Address button clicked.');
          }} cssStyle='btn btn-block' />
        </Link>}

        {hideButton && <Link to='/bus-delay'>
          <Button colour='green' text='Bus Delay' onClick={() => {
            setHideButton(false);
            console.log('Bus-delay button clicked.');
          }} cssStyle='btn btn-block' />
        </Link>}
        
        {hideButton && <Link to='/frequent-address'>
          <Button colour='green' text='Frequent Address' onClick={() => {
            setHideButton(false);
            console.log('Frequent Address button clicked.');
          }} cssStyle='btn btn-block' />
        </Link>}
        
        {hideButton && <Link to='/hazard'>
          <Button colour='green' text='Hazard' onClick={() => {
            setHideButton(false);
            console.log('Frequent Address button clicked.');
          }} cssStyle='btn btn-block' />
        </Link>}
        
        {hideButton && <Link to='/obstruction'>
          <Button colour='green' text='Obstruction' onClick={() => {
            setHideButton(false);
            console.log('Frequent Address button clicked.');
          }} cssStyle='btn btn-block' />
        </Link>}
        
        {hideButton && <Link to='/query'>
          <Button colour='green' text='Query' onClick={() => {
            setHideButton(false);
            console.log('Frequent Address button clicked.');
          }} cssStyle='btn btn-block' />
        </Link>}
        
        {hideButton && <Link to='/response'>
          <Button colour='green' text='Response' onClick={() => {
            setHideButton(false);
            console.log('Frequent Address button clicked.');
          }} cssStyle='btn btn-block' />
        </Link>}
        
        {hideButton && <Link to='/transit-issue'>
          <Button colour='green' text='Transit Issue' onClick={() => {
            setHideButton(false);
            console.log('Frequent Address button clicked.');
          }} cssStyle='btn btn-block' />
        </Link>}
        
        {hideButton && <Link to='/user-query'>
          <Button colour='green' text='User Query' onClick={() => {
            setHideButton(false);
            console.log('Frequent Address button clicked.');
          }} cssStyle='btn btn-block' />
        </Link>}
        
        {hideButton && <Link to='/user-response'>
          <Button colour='green' text='User Response' onClick={() => {
            setHideButton(false);
            console.log('Frequent Address button clicked.');
          }} cssStyle='btn btn-block' />
        </Link>}
        
        {hideButton && <Link to='/user-transit-issue'>
          <Button colour='green' text='User Transit Issue' onClick={() => {
            setHideButton(false);
            console.log('Frequent Address button clicked.');
          }} cssStyle='btn btn-block' />
        </Link>}
        
        {hideButton && <Link to='/stat1'>
          <Button colour='purple' text='Most Frequent places with transit issues' onClick={() => {
            setHideButton(false);
            console.log('Frequent Address button clicked.');
          }} cssStyle='btn btn-block' />
        </Link>}

        <Route path='/user' exact render={(props) => (
          <>
            <User setTitle={setTitle} toggleShowAddTask={toggleShowAddTask} setHideButton={setHideButton} />
          </>
        )
        } />

        <Route path='/address' exact render={(props) => (
          <>
            <Address setTitle={setTitle} toggleShowAddTask={toggleShowAddTask} setHideButton={setHideButton} />
          </>
        )
        } />

        <Route path='/bus-delay' exact render={(props) => (
          <>
            <BusDelay setTitle={setTitle} toggleShowAddTask={toggleShowAddTask} setHideButton={setHideButton} />
          </>
        )
        } />
        
        <Route path='/frequent-address' exact render={(props) => (
          <>
            <FrequentAddress setTitle={setTitle} toggleShowAddTask={toggleShowAddTask} setHideButton={setHideButton} />
          </>
        )
        } />
        
        <Route path='/hazard' exact render={(props) => (
          <>
            <Hazard setTitle={setTitle} toggleShowAddTask={toggleShowAddTask} setHideButton={setHideButton} />
          </>
        )
        } />
        
        <Route path='/obstruction' exact render={(props) => (
          <>
            <Obstruction setTitle={setTitle} toggleShowAddTask={toggleShowAddTask} setHideButton={setHideButton} />
          </>
        )
        } />
        
        <Route path='/query' exact render={(props) => (
          <>
            <Query setTitle={setTitle} toggleShowAddTask={toggleShowAddTask} setHideButton={setHideButton} />
          </>
        )
        } />
        
        <Route path='/response' exact render={(props) => (
          <>
            <Response setTitle={setTitle} toggleShowAddTask={toggleShowAddTask} setHideButton={setHideButton} />
          </>
        )
        } />
        
        <Route path='/transit-issue' exact render={(props) => (
          <>
            <TransitIssue setTitle={setTitle} toggleShowAddTask={toggleShowAddTask} setHideButton={setHideButton} />
          </>
        )
        } />
        
        <Route path='/user-query' exact render={(props) => (
          <>
            <UserQuery setTitle={setTitle} toggleShowAddTask={toggleShowAddTask} setHideButton={setHideButton} />
          </>
        )
        } />
        
        <Route path='/user-response' exact render={(props) => (
          <>
            <UserResponse setTitle={setTitle} toggleShowAddTask={toggleShowAddTask} setHideButton={setHideButton} />
          </>
        )
        } />
        
        <Route path='/user-transit-issue' exact render={(props) => (
          <>
            <UserTransitIssue setTitle={setTitle} toggleShowAddTask={toggleShowAddTask} setHideButton={setHideButton} />
          </>
        )
        } />
        
        <Route path='/stat1' exact render={(props) => (
          <>
            <MostFrequentIssues setTitle={setTitle} toggleShowAddTask={toggleShowAddTask} setHideButton={setHideButton} />
          </>
        )
        } />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
