/* eslint no-eval: 0 */
import React, { Component } from "react";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({value : e.target.value})
  }


  handleClick = (e) =>{
    const a = e.target.textContent;
    // console.log(e.target.classList)
    this.setState(prevState =>{
      return{
        ...prevState,
        value : prevState.value + a
      }
  })
    if(e.target.classList.contains('equal')) {
      this.setState({value:eval(this.state.value)})
    }

    if(e.target.classList.contains('clear')) {
      this.setState({value:''})
    }
  }

  renderButton = () => {
    const list = [];
    for (let i =1;i<10;i++) {
      list.push(<div  key={i} className='btn number'  value={i}
      onClick={this.handleClick}>{i}</div>)
    }
    return list;
  }


  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
            <input value = {this.state.value || ''} className='input' onChange={this.handleChange} ></input>
          <div className="btn-container">
            <div className="numbers">
              {this.renderButton()}
            </div>
            <div className="operators">
              <div onClick={this.handleClick} className="btn operator">+</div>
              <div onClick={this.handleClick} className="btn operator">-</div>
              <div onClick={this.handleClick} className="btn operator">*</div>
              <div onClick={this.handleClick} className="btn operator">/</div>
              <div onClick={this.handleClick} className="btn operator equal">=</div>
              <div onClick={this.handleClick} className="btn operator clear">Clear</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
