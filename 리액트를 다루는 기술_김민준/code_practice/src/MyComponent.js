import PropTypes from "prop-types";

const MyComponent = ({ name, children, favoriteNumber }) => {
    return (
        <>
            <h1>
                오월이의 멋지고 아름다운 컴포넌트 : <u>{name}</u> ੧ᐛ੭
            </h1>
            <h2>자식 요소 : {children}</h2>
            <h2>가장 좋아하는 숫자 : {favoriteNumber}</h2>
        </>
    );
};

MyComponent.defaultProps = {
    name: "기본 이름",
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
