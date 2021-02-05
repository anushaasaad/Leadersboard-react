import React, { Component } from "react";
import "./Student.css";

class Student extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      success: false
    };
  }
  componentDidMount() {
    this.setState({
      score: this.props.score
    });
  }
  addscore() {
    this.setState(
      {
        score: this.state.score + 1
      },
      () => {
        if (this.state.score > 250) {
          this.setState({ success: true });
        }
      }
    );
  }
  failscore() {
    this.setState(
      {
        score: this.state.score - 1
      },
      () => {
        if (this.state.score <= 250) {
          this.setState({ success: false });
        }
      }
    );
  }
  render() {
    const isSuccess = this.state.success;
    let Text;
    if (isSuccess) {
      Text = <span>Succes</span>;
    } else {
      Text = <span>Fail</span>;
    }

    return (
      <div className="Student">
        <div className="left">
          <h2 className="studentname">
            {this.props.name}
            <button className="addsuccessbtn" onClick={() => this.addscore()}>
              +
            </button>
            <button className="failsuccessbtn" onClick={() => this.failscore()}>
              -
            </button>
          </h2>
          <p className="uniname">
            {this.props.university} {Text}{" "}
          </p>
        </div>
        <div className="right">
          <div className="score"> {this.state.score}</div>
        </div>
      </div>
    );
  }
}
export default Student;
