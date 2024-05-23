// 하위 컴포넌트(Child) 정의 (함수형 컴포넌트)
function Child() {
  const name = "리액트";
  // jsx 문법을 사용하여 html 요소로 반환
  return (
    <>
      <h1>{name} 안녕</h1>
      <h2>잘 동작하니?</h2>
    </>
  );
}

// Child 컴포넌트 내보내기 
export default Child;
