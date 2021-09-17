import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StreamsContainer from './containers/StreamsContainer';
import AddStreamForm from './containers/AddStreamFormContainer';
import StreamShowContainer from './containers/StreamShowContainer';

import NavBar from './components/Navbar'


function App() {
  return (
    <div className="App">
     <Router>
       <NavBar />

       <Switch>
         <Route
          exact path="/">
             <StreamsContainer />
         </Route>
         <Route
          exact path="/streams/new">
            <AddStreamForm /></Route>
         {/* <Route
          path='/user/:userId/streams/new'
          component={AddStreamForm} /> */}
          <Route
            path="/streams/:streamId" 
            component={StreamShowContainer} />

       </Switch>
      </Router> 
    </div>
  );
}

export default App;
