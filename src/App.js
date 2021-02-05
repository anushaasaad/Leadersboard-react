import React, { Component } from "react";
import Student from "./Student";
import "./App.css";
import "./Student.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="leadersheading">Leaders Board</div>
        <Student
          name="Anusha"
          university="FAST National University"
          score={450}
        />
        <Student name="Bilal" university="SZABIST" score={150} />
        <Student name="Fizza" university="KU" score={250} />
        <Student name="Zaid" university="IQRA UNIVERSITY" score={440} />
        <Student name="Esha" university="NED UNIVERSITY" score={456} />
        <Student
          name="Ahmed"
          university="FAST National University"
          score={150}
        />
      </div>
    );
  }
}
export default App;
