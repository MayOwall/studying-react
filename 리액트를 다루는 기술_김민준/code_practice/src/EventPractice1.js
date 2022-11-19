import { Component } from "react";

class EventPractice extends Component {
    state = {
        message: "! 메세지가 없습니다.",
        name: "! 이름이 없습니다.",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleClick = () => {
        alert(`${this.state.message} ${this.state.name}`);
        this.setState({
            message: "! 메세지가 없습니다.",
            name: "! 이름이 없습니다.",
        });
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") this.handleClick();
    };

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력 해 보세요"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>메세지 확인</button>
            </div>
        );
    }
}

export default EventPractice;
