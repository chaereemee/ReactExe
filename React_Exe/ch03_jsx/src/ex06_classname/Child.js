import "./Child.css";

function Child() {
  const name = "리액트";

  // 예약어 충돌 방지를 위해 class 대신 className 사용
  return <div className="react">{name}</div>;
}

export default Child;
