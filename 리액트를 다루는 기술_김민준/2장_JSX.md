# JSX

## 2.1 코드 이해하기

```jsx
import logo from "./logo.svg";
function App() {
    return <div>This is JSX</div>;
}
```

<br/>

상단의 코드는 함수형 컴포넌트로,
함수형 컴포넌트 내부에 HTML과 비슷한 모양의 코드가 있는 것을 볼 수 있다.

```jsx
// JSX
<div>This is JSX</div>
```

이렇게 컴포넌트 내부에서 HTML처럼 작성된 코드들을 <b>`JSX`</b>라고 한다.

<br/>
<br/>

## 2.2 JSX란?

JSX는 자바스크립트의 확장 문법이다.<br/>
JSX로 작성된 코드는 코드가 번들링 되면서 babel을 통해 일반 자바스크립트의 형태로 변환된다.

코드가 변환되는 과정은 아래와 같다.

#### (변환 전)

```jsx
// JSX로 작성한 코드

function App() {
    return (
        <div>
            Hello <b>JSX</b>
        </div>
    );
}
```

#### (변환 후)

```jsx
// babel을 통해 번들링된 코드

function App() {
    return React.createElement(
        "div",
        null,
        "Hello ",
        React.createElement("b", null, "react")
    );
}
```

<br/>
<br/>

## JSX의 장점

### 1️⃣ 보기 쉽고 익숙하다

일반 자바스크립트의 <b>`createElement`</b> 등의 코드를 사용하여 DOM을 작성하는 것에 비해, JSX를 사용하여 코드를 작성하는 것이 훨씬 `가독성`이 높고 `작성하기도 쉽다`.

<b>cf. JSX를 사용하는 가장 주된 이유 ദ്ദി*ˊᗜˋ*)</b>

<br/>

### 2️⃣ 더욱 높은 활용도

JSX내부에서는 HTML 태그 뿐만 아니라 컴포넌트, 자바스크립트 문법 또한 작성할 수 있다.<br/>
이로 인해 더 높은 활용이 가능하다.

<br/>

> React.StrictMode
>
> 개발 환경에서만 활성화되는 디버깅용 컴포넌트.
> 리액트 프로젝트에서 앞으로 사라질 레거시 기능을 사용할 때 경고를 해주고, 미래의 리엑트 버전에 도입될 기능들이 정상적으로 잘 호환될 수 있도록 유도하는 역할을 한다.
>
> 아래와 같이 사용된다.

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // 요기!
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```
