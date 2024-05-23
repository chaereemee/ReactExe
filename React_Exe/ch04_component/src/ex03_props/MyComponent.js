// MyComponent는 props 객체를 사용하여 동적으로 데이터를 받아와 렌더링
// props : 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달하는 방식, 읽기 전용이며 변경 불가 
function MyComponent(props) {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
}

export default MyComponent;
