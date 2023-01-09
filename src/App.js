import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StreamsContainer from './containers/StreamsContainer';
import AddStreamForm from './containers/AddStreamFormContainer';
import StreamShowContainer from './containers/StreamShowContainer';
import EditStreamForm from './components/EditStreamForm';

import NavBar from './components/Navbar'
import './styles/App.css';


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
          exact path="/streams/new"
          render={(routerProps) => <AddStreamForm {...routerProps} />} />
         {/* <Route
          path='/user/:userId/streams/new'
          component={AddStreamForm} /> */}
          <Route
            exact path="/streams/:streamId" 
            component={StreamShowContainer} />
          <Route 
            exact path="/streams/:streamId/edit"
            render={(routerProps) => <EditStreamForm {...routerProps} />} />
            

       </Switch>
      </Router> 
    </div>
  );
}

export default App;
