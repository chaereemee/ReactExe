import { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });

    // 바로 다시 입력할 수 있도록 <input/>에 포커스를 준다.
    this.input.focus();
  };

  //<input/>요소를 this.input이 가리키게 된다.
  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}     // DOM 요소나 클래스 컴포넌트 인스턴스에 직접 접근할 수 있게 해주는 기능, 포커스 설정 작업 등 
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
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
