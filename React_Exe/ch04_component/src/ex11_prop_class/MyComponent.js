import PropTypes from "prop-types";
import { Component } from "react";

class MyComponent extends Component {
  render() {
    // this.props는 props를 통해 전달된 값을 사용하여 접근할 때 필요
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요. 제 이름은 {name}입니다.
        <br />
        children값은 {children}입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본 이름",
};
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
