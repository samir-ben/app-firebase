import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from './components/posts/PostDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddPost from './components/posts/AddPost'
import DeleteSuccss from './components/posts/deleteSuccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/posts/:id' component={PostDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/add' component={AddPost} />
            <Route path='/delete' component={DeleteSuccss} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
