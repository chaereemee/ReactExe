const MyComponent = (props) => {
  return (
    <div>
      <div>안녕하세요, 제 이름은 {props.name}입니다.</div>
      {/* props.children은 특별한 props, 컴포넌트 내부에 다른 요소나 컴포넌트를 삽입 */}
      <div>포함된 값은 {props.children}입니다.</div>
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
