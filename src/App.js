import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
// import ListThreads from './components/ListThreads';
// import ListPosts from './components/ListPosts';
// import ListComments from './components/ListComments';
// import BBCTop from './components/BBCTop'
// import LoginButtons from './components/LoginButtons'
import Home from './pages/Home'
import axios from 'axios';
import './index.css';

// heroku deployment
// **** https://gist.github.com/mars/5e01bb2a074594b44870cb087f54fe2f ***

// Style options
// **** https://hackernoon.com/the-coolest-react-ui-frameworks-for-your-new-react-app-ad699fffd651 ****

// Link to Moment.js command for (10 sec ago) 
// **** http://momentjs.com/docs/#/displaying/from/ ****

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  
  // componentWillMount(){
  //   this.getThreads();
  //   this.getPosts();
  //   this.getComments();
  // }

  // componentDidMount(){
  //   this.getThreads();
  //   this.getPosts();
  //   this.getComments();
  // }
  render() {
    const View = () => (
      <div>
        <Route path="/" render={() => <Home/>}/>
      </div>
    )
    return (
      <div className="App">
        <p>Hi, Im the App.js</p>
        <BrowserRouter>
          <View/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
