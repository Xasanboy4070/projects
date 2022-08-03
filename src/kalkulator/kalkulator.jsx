import { Component } from "react";
import "./kalkulator.css";

class Kalkulator extends Component {
  state = {
    resault: "",
    num1: "",
    num2: "",
    actions: "",
    btns: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    clicked: true,
    ansver: true,
  };

  handleNum(num) {
    if (this.state.clicked) {
      // eslint-disable-next-line react/no-direct-mutation-state
      return this.setState({ num1: (this.state.num1 += num) });
    }
    // eslint-disable-next-line react/no-direct-mutation-state
    return this.setState({ num2: (this.state.num2 += num) });
  }

  handleActions(action) {
    console.log(action);
    if (this.state.num1 !== "") {
      this.setState({ clicked: false, actions: action });
    }
  }

  handleDelet() {
    const { clicked, num1, num2 } = this.state;
    clicked
      ? this.setState({ num1: num1.slice(0, num1.length - 1) })
      : this.setState({ num2: num2.slice(0, num2.length - 1) });
  }

  handleResault(num1, action, num2) {
    this.setState({
      // eslint-disable-next-line no-eval
      resault: eval(num1 + action + num2),
      ansver: false,
    });
    setTimeout(() => {
      // eslint-disable-next-line no-eval
      console.log(eval(num1 + action + num2));
    }, 1000);
    console.log("resault = ", this.state.resault);
  }

  handleRestart() {
    this.setState({
      resault: 0,
      num1: "",
      num2: "",
      actions: "",
      btns: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      clicked: true,
      ansver: true,
    });
  }

  Resault = this.state.resault === 0;

  render() {
    return (
      <div>
        <h1
          onClick={() => {
            this.handleDelet();
          }}
          className="resault"
        >
          {this.state.ansver
            ? this.state.clicked
              ? this.state.num1
              : this.state.num2
            : this.state.resault}
        </h1>

        <div className="btns">
          <div className="">
            <div className="btns1">
              <button
                onClick={() => {
                  this.handleRestart();
                }}
                className="btn1"
              >
                AC
              </button>
              <button className="btn1">+/-</button>
              <button
                value={"%"}
                onClick={(e) => {
                  this.handleActions(e.target.value);
                }}
                className="btn1"
              >
                %
              </button>
            </div>
            <div className="btns3">
              {this.state.btns.map((btn) => (
                <button
                  onClick={(e) => {
                    this.handleNum(e.target.innerText);
                  }}
                  className="btn3"
                  key={btn}
                >
                  {btn}
                </button>
              ))}
              <button
                value={0}
                onClick={(e) => {
                  this.handleNum(e.target.value);
                }}
                className="btn3 btnZero"
              >
                0
              </button>
              <button className="btn3">,</button>
            </div>
          </div>
          <div className="btns2">
            <button
              value={"/"}
              onClick={(e) => {
                this.handleActions(e.target.value);
              }}
              className="btn2"
            >
              /
            </button>
            <button
              value={"*"}
              onClick={(e) => {
                this.handleActions(e.target.value);
              }}
              className="btn2"
            >
              *
            </button>
            <button
              value={"-"}
              onClick={(e) => {
                this.handleActions(e.target.value);
              }}
              className="btn2"
            >
              -
            </button>
            <button
              value={"+"}
              onClick={(e) => {
                this.handleActions(e.target.value);
                console.log(this.Resault);
                console.log(this.state.resault);
              }}
              className="btn2"
            >
              +
            </button>
            <button
              onClick={(e) => {
                this.handleResault(
                  this.state.num1,
                  this.state.actions,
                  this.state.num2
                );
                console.log(this.Resault);
                console.log(this.state.resault);
              }}
              className="btn2"
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Kalkulator;
