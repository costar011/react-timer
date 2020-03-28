import React from "react";
import "./styles/app.css";

let autoTime = null;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeSecond: 0,
      isStart: false
    };
  }
  render() {
    const { timeSecond } = this.state;
    return (
      <div className="timerBox">
        <div className="timerBox__time">
          <span>{timeSecond}</span>
        </div>
        <div className="timerBox__record"></div>
        <div className="timerBox__btn">
          <input type="button" value="START" onClick={this._startTimer}></input>
          <input type="button" value="STOP" onClick={this._stopTimer}></input>
          <input type="button" value="RECODE"></input>
        </div>
      </div>
    );
  }

  // setInterval : 1초마다 무한재생이고 state값이 바뀐다.
  _startTimer = () => {
    const { isStart } = this.state;
    if (!isStart) {
      this.setState({
        isStart: true
      });

      autoTime = setInterval(() => {
        this.setState({
          timeSecond: this.state.timeSecond + 1
        });
      }, 1000);
    } else {
      alert("이미 타이머가 작동중");
    }
  };

  _stopTimer = () => {
    this.setState({
      isStart: false
    });

    clearInterval(autoTime);
    this.setState({
      timeSecond: 0
    });
  };
}
export default App;
