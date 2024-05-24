import { Component } from "react";

/*
state는 Hook의 일종으로
컴포넌트의 상태를 컴포넌트 내부에 저장하기 위해
리액트가 지원해주는 문법이다.
내부에 저장하는 이유는 컴포넌트의 외부 의존도를 낮추고 독립성을 가지기 위함이다.

선언은 this.state = { 변수명 : 초기값}으로 하고
this.state의 내부 변수값을 변경할 때는 반드시
this.setState = ({변수명 : 변수명 + 변화값})으로 해야
리액트의 Virtual DOM이 이 요소의 변화를 감지하여 화면상에 반영(render)한다.
*/

/*
    useState와 state는 상태 관리를 위한 두 가지 접근 방식이다
    state는 클래스 컴포넌트에서 사용되고, useState는 함수형 컴포넌트에서 사용됨
    
    state
    this.state로 접근하며, 상태를 변경할 때는 this.setState() 메소드를 사용

    useState
    훅 중 하나로, 함수형 컴포넌트에서도 상태를 사용
*/
class Counter extends Component{
    // 생성자에서 state 초기화 (number라는 상태 변수를 0으로 초기화)
    constructor(props){
        super(props);
        this.state = {
            number : 0
        };
    }

    // render() : 클래스 컴포넌트가 화면에 렌더링할 내용을 반환
    render(){
        const { number } = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <button onClick={()=>{
                    this.setState({number : number + 1});
                }}>
                +1
                </button>
            </div>
        )
    }
}

export default Counter;