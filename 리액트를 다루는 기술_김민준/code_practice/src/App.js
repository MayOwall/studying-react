import { Component } from "react";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";

class App extends Component {
    render() {
        return (
            <>
                <ScrollBox
                    ref={(ref) => {
                        this.scrollBox = ref;
                    }}
                />
                <button
                    onClick={() => {
                        this.scrollBox.handleScroll();
                    }}
                >
                    스크롤을 내리는 버튼
                </button>
                <ValidationSample />;
            </>
        );
    }
}
export default App;
