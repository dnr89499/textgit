// Home.js

import React, { Component } from 'react';
import Login from './Login';
// import Contact from './Contact'

class Home extends Component {
  state = {
    redirect: false,
    user:{
      name:'Vinod',
      age:32
    }
  }
  render() {
    return (
      <div>
      <Login />
     </div>
    );
  }
}
export default Home


