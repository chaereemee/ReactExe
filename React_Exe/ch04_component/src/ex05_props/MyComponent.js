// 함수 선언식(Function Declaration)
// : 호이스팅(선언 위치와 상관없이 어느 곳에서나 호출 가능)
// function MyComponent(props) {
//   return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
// }

// 화살표 함수(Arrow Function)
// : 화살표 함수는 변수 선언과 동일하게 취급 -> 함수가 정의되기전에 호출당하면 참조 오류, this 바인딩 -> 상위 스코프의 this 값
const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};

export default MyComponent;
