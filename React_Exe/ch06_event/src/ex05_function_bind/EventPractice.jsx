import { Component } from "react";

class EventPractice extends Component{

    state = {
        message: ''
    }

    constructor(props){
        super(props);     // 부모 클래스의 constructor을 호출하기 위해

        // Arrow함수가 아닌, 일반 함수는 생성자에서 bind(this)를 처리해야 한다.
        // 일반 함수로 정의된 메소드를 이벤트 핸들러로 사용할 때 this가 클래스 인스턴스를 가리키도록 하기 위해 필요
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // 입력 필드의 값이 변경될 때마다 호출
    handleChange(e){
        this.setState({
            message : e.target.value
        })
    }

    // 버튼 클릭될 때 호출 
    handleClick(e){
        alert(this.state.message); // 값 알림으로 표시한 후
        this.setState({
            message : ''           // 빈 문자열로 초기화
        })
    }

    render() {
        return (            
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;