import { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible((v) => !v)}>
        누르면 보였다 사라졌다 해유
      </button>
      <Counter />
      {visible && <Info />}
    </div>
  );
}

export default App;
