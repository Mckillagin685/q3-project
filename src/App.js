import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
// import ListThreads from './components/ListThreads';
// import ListPosts from './components/ListPosts';
// import ListComments from './components/ListComments';
// import BBCTop from './components/BBCTop'
// import LoginButtons from './components/LoginButtons'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Support from './pages/Support';
import axios from 'axios';
import './index.css';

// Style options
// **** https://hackernoon.com/the-coolest-react-ui-frameworks-for-your-new-react-app-ad699fffd651 ****

// Link to Moment.js command for (10 sec ago) 
// **** http://momentjs.com/docs/#/displaying/from/ ****

class App extends Component {
  constructor(){
    super();
    this.state = {
      Threads: [],
      Posts: [],
      Comments: [],
    }
  }

  // getThreads(){
  //   axios.get('/threads')
  //   .then((response) => {
  //     this.setState({Threads: response.data})
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  // getPosts(){
  //   axios.get('/posts')
  //   .then((response) => {
  //     this.setState({Posts: response.data})
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  // getComments(){
  //   axios.get('/comments')
  //   .then((response) => {
  //     this.setState({Comments: response.data})
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }
  
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
        <Route path="/" exact render={({ match }) => <Home/>}/>
        <Route path="/about" exact render={() => <About/>}/>
        <Route path="/contact" exact render={() => <Contact/>}/>
        <Route path="/support" exact render={() => <Support/>}/>
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
