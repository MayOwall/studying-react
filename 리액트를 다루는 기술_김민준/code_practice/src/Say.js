import { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState("아무 버튼이나 눌러보세요");
    const [color, setColor] = useState("black");

    const onClickEnter = () => setMessage("안녕하세요~");
    const onClickLeave = () => setMessage("안녕히 가세요~");
    const onClickBlack = () => setColor("black");
    const onClickRed = () => setColor("red");
    const onClickBlue = () => setColor("Blue");

    return (
        <>
            <h1 style={{ color }}>인삿말 : {message}</h1>
            <button onClick={onClickEnter}>ENTER</button>
            <button onClick={onClickLeave}>LEAVE</button>
            <br />
            <h2>인삿말 색 바꾸기</h2>
            <button onClick={onClickBlack}>black</button>
            <button onClick={onClickRed}>red</button>
            <button onClick={onClickBlue}>blue</button>
        </>
    );
};

export default Say;
