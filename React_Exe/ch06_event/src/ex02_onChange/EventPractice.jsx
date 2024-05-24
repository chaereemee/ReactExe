// 클래스 컴포넌트를 만들 때 React.Component를 상속받아 정의하기 위해 import
import { Component } from "react";

class EventPractice extends Component{
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message"
                    placeholder="아무거나 입력해 보세요"
                    // 사용자가 입력 필드에 텍스트를 입력할 때마다 발생 
                    onChange={(e)=>{
                        // console.log(e);
                        console.log(e.target.value); // 입력 필드의 현재 값을 콘솔에 출력
                    }}
                />
            </div>
        );
    }
}

export default EventPractice;