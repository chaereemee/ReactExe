import PropTypes from "prop-types";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      <div>안녕하세요, 제 이름은 {name}입니다.</div>
      <div>포함된 값은 {children}입니다.</div>
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

// propTypes : 컴포넌트에서 전달받는 props의 타입을 검증하는 기능, 예상치 못한 데이터 타입이 전달된 경우 경고 메시지를 콘솔에 출력 
MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
