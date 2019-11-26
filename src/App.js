import React, { Component } from 'react';
import Attendence from './Attendance';
import Colours from './Colours';
class App extends Component{
  render(){
    return(
      <div className ="App">
        <h1><center>Cohort 15</center> </h1>
        <Attendence/>
        <Colours/>
      </div>
    )
  }
}
export default App;