// This page is A.K.A. Threads

import React, {Component} from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import About from '../components/About'
import Contact from '../components/Contact'
import Support from '../components/Support';
import ListThreads from '../components/ListThreads';
import Thread from '../components/Thread';
import ListPosts from '../components/ListPosts';
import axios from 'axios';

// *** https://stackoverflow.com/questions/29552601/how-to-set-the-defaultroute-to-another-route-in-react-router ***

class Home extends Component {
  constructor(){
    super();
    this.state = {
      Threads: [],
      Posts: [],
      firstName: '',
      isLoggedIn: false
    }
  }

  handleLoggedIn(){
    axios.get('/token')
      .then((response) => {
        this.getFirstName()
        this.setState({isLoggedIn: response.data})
        
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleLogout(){
    axios.delete('/token')
      .then((response) => {
        this.handleLoggedIn()
        this.props.history.push('/')
      })
      .catch((err) => console.log(err))
  }

  getFirstName(){
    axios.get('users/firstName')
      .then((response) => {
        this.setState({firstName: response.data.firstName})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getComments(){
    axios.get('/comments')
    .then((response) =>
      this.setState({Comments: response.data})
    )
    .catch((err) =>
      console.log(err)
    )
  }

  getPosts(){
    axios.get('/posts')
    .then((response) =>
      this.setState({Posts: response.data})
    )
    .catch((err) =>
      console.log(err)
    )
  }

  getThreads(){
    axios.get('/threads')
      .then((threads) => 
      this.setState({Threads: threads.data})
      )
      .catch((err) => 
        console.log(err)
      )
  }

  componentWillMount(){
    this.getThreads()
    this.getPosts()
    this.getComments()
  }

  componentDidMount(){
    this.getThreads()
    this.getPosts()
    this.getComments()
  }
  render(){
    const View = () => (
      <div>
        <Route exact path={`${this.props.match.url}`} render={() => <ListThreads threads={this.state.Threads} />}/>
        <Route path={`${this.props.match.url}about`} render={() => <About />}/>
        <Route path={`${this.props.match.url}support`} render={() => <Contact />}/>
        <Route path={`${this.props.match.url}contact`} render={() => <Support />}/>
        <Route path={`${this.props.match.url}posts`} render={() => <ListPosts />}/>
        <Route path={`${this.props.match.url}login`} render={() => <LoginForm onLogin={this.handleLoggedIn.bind(this)}/>}/>
        <Route path={`${this.props.match.url}sign-up`} render={() => <SignUpForm />}/>
        <Route path={`${this.props.match.url}thread/:threadId`} render={() => <Thread />}/>
        {/* <Route path={`${this.props.match.url}posts/${id}`} render={() => <ListPosts post={id}/>}/> */}
      </div>
    )
    return (
      <div className="Home">
        <p>hi im home.js</p>
        <Nav isLoggedIn={this.state.isLoggedIn} firstName={this.state.firstName} onLogout={this.handleLogout.bind(this)}/>
        <View/>
        <Footer/>
      </div>
    )
  }
}

export default withRouter(Home);