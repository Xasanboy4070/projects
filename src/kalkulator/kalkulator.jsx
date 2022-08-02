import { Component } from "react";
import "./kalkulator.css";

class Kalkulator extends Component {
  state = {
    resault: 0,
    num1: "",
    num2: "",
    actions: "",
    btns: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    clicked: true,
  };

  handleNum(num) {
    if (this.state.clicked) {
      return this.setState({ num1: (this.state.num1 += num) });
    }
    return this.setState({ num2: (this.state.num2 += num) });
  }

  handleActions(action) {
    console.log(action);
    if (this.state.num1 !== "") {
      this.setState({ clicked: false, actions: action });
    }
  }

  handleResault(num1, action, num2) {
    this.setState({
      resault: eval(num1 + action + num2),
    });
    setTimeout(() => {
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
    });
  }

  Resault = this.state.resault === 0;

  render() {
    return (
      <div>
        {this.Resault ? (
          <h1 className="resault">
            {this.state.clicked ? this.state.num1 : this.state.num2}
          </h1>
        ) : (
          <h1 className="resault">{this.state.resault}</h1>
        )}

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
                onClick={(e) => {
                  this.handleActions(e.target.value);
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
