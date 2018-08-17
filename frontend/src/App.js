import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  uploadPic(e){
    let file = e.target.file
    console.log('nice')
    fetch('/upload',{
      method: "POST",
      body: file
    })
    .then(x=>{
      console.log('ok')
    })
  }
  render() {
    return (
      <div className="App">
       <form>
         <input type="file" onChange={this.uploadPic} name="file"/>
         </form>
      </div>
    );
  }
}

export default App;
