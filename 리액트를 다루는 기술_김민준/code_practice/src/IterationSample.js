import { useState } from "react";

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, content: "짱구" },
        { id: 2, content: "철수" },
        { id: 3, content: "맹구" },
        { id: 4, content: "유리" },
        { id: 5, content: "훈이" },
    ]);

    const [inputText, setInputText] = useState("");

    const [nextId, setNextId] = useState(6);

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            content: inputText,
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText("");
    };
    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id !== id);
        setNames(nextNames);
    };

    const nameList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.content}
        </li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>이름 추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;
