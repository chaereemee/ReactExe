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
        const { number, fixedNumber } = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                onClick={() => {
                    this.setState(
                    {
                        number: number + 1
                    },
                    () => { // setState의 콜백 함수로 사용된 화살표 함수 : 상태 업데이트가 완료된 후 실행 
                        console.log('방금 setState가 호출되었습니다.');
                        console.log(this.state);   // 업데이트도니 후의 값
                    }
                    );
                }}
                >
                +1
                </button>
            </div>
        )
    }
}

export default Counter;