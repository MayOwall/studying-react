import { Component } from "react";

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 8,
    };

    render() {
        const { number, fixedNumber } = this.state;
        return (
            <>
                <h1>button click : {number}</h1>
                <h1>click goal : {fixedNumber}</h1>
                <button
                    onClick={() => {
                        this.setState(
                            (prevState) => {
                                return { number: prevState.number + 1 };
                            },
                            () => console.log("버튼이 클릭되었습니다.")
                        );
                        this.setState((prevState) => {
                            return { number: prevState.number + 1 };
                        });
                    }}
                >
                    +1
                </button>
            </>
        );
    }
}

export default Counter;
