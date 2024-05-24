import { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0,
            fixedNumber : 0
        };
    }

    render(){
        const { number, fixedNumber } = this.state;  // 구조 분해 할당으로 값을 가져옴 

        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                /*
                    setState 호출을 연속으로 호출하면 하나의 업데이트로 병합하여 최적화한다
                    최종결과 버튼 한 번을 클릭하면 number가 2 증가한다.

                    prevState : 이전 상태 참조
                */
                onClick={() => {
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        };
                    });
                    // 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
                    // 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }));
                }}
                >
                +1
                </button>
            </div>
        )
    }
}

export default Counter;