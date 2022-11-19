import { useState } from "react";
const EventPractice2 = () => {
    const [state, setState] = useState({
        name: "no name",
        message: "no message",
    });

    const { name, message } = state;

    const handleState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const onClickButton = () => {
        alert(`name : ${name}, message : ${message}`);
        setState({
            name: "no name",
            message: "no message",
        });
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") onClickButton();
    };

    return (
        <>
            <h1>EventPractice (함수형)</h1>
            <input
                type="text"
                name="name"
                placeholder="name"
                onChange={handleState}
                onKeyPress={onKeyPress}
            />
            <input
                type="text"
                name="message"
                placeholder="message"
                onChange={handleState}
            />
            <button onClick={onClickButton}>check name & message</button>
        </>
    );
};

export default EventPractice2;
