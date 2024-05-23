// MyButton이라는 이름의 함수형 컴포넌트 정의
function MyButton(props) {
  // 'useState' 훅을 사용하여 'isClicked'라는 상태 변수를 정의하고, 초기값을 'false'로 설정, 'setIsCliked'는 'isClicked' 값을 업데이트하는 함수
  const [isClicked, setIsClicked] = React.useState(false);

  // 요소를 생성하고 반환
  return React.createElement(
    "button", // 버튼 
    // 버튼 클릭 시 'setIsClicked(true)'를 호출하여 참이면 'Clicked!' 거짓이면 'Click here' 표시
    { onClick: () => setIsClicked(true) },
    isClicked ? "Clicked!" : "Click here"
  );
}

// root ID 값을 가진 DOM 요소 선택 
const domContainer = document.querySelector("#root");
// 'ReactDOM.createRoom'을 사용하여 React 루트를 생성
const root = ReactDOM.createRoot(domContainer);
// MyButton 컴포넌트를 렌더링
root.render(React.createElement(MyButton));
