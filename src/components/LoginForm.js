import React, { Component } from 'react';

class LoginForm extends Component {

// **** https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router ****

// **** https://stackoverflow.com/questions/29244731/react-router-how-to-manually-invoke-link ****

// **** https://github.com/reactjs/redux/issues/227 ****

// **** https://moduscreate.com/reactjs-form-validation-approaches/ ****

  handleLogin(){
    axios.post("/token", {
      Email: this.refs.email,
      Password: this.refs.password
    })
    .then(response => response)
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return(
      <div className="LoginForm">
        <form onSubmit={this.handleLogin()}>
          <div>
            <label>Email</label>
            <input type="text" ref="email"/>
          </div>
          <div>
            <label>Password</label>
            <input type="text" ref="password"/>
          </div>
          <button type="submit" value="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;