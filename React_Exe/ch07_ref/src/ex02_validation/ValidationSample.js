import { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = { // state 객체는 세가지 변수 상태를 포함한다.
    password: "",      // 비밀번호
    clicked: false,    // 버튼
    validated: false,  // 비밀번호가 올바른지(0000인지)
  };

  // 입력 필드의 값이 변경될 때 호출
  handleChange = (e) => {    
    this.setState({
      password: e.target.value,
    });
  };

  // 버튼이 클릭될때 호출
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000", // 0000이라면 true, 그렇지않으면 false
    });
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked        // 얘가 true이면 35줄로 가고, falsedlaus 38줄
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
