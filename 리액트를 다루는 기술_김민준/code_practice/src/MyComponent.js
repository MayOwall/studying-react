import { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
    static defaultProps = {
        name: "기본 이름",
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    };

    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                <h1>오월이의 멋지고 아름다운 컴포넌트 : {name} (੭•̀ᴗ•̀)੭</h1>
                <h2>좋아하는 숫자 : {favoriteNumber}</h2>
                <h2>자식 요소 : {children}</h2>
            </div>
        );
    }
}

export default MyComponent;
