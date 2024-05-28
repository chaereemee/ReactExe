const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  // 배열의 각 요소를 변환해서 새로운 배열을 반환 
  const nameList = names.map((name) => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
