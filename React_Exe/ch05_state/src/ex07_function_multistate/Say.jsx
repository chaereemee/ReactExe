import {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState(''); // message는 빈 문자열로 초기화 
    const [color, setColor] = useState('black'); // color는 black으로 초기화

    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요');

    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}} onClick={()=>setColor('red')}>
                빨간색
            </button>
            <button style={{color:'green'}} onClick={()=>setColor('green')}>
                초록색
            </button>
            <button style={{color:'blue'}} onClick={()=>setColor('blue')}>
                파란색
            </button>
        </div>
    )
}

export default Say;