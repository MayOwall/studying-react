import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("랜더링이 완료되었슴당");
    console.log("마운트 될 때만 실행됨다");

    return () => {
      console.log("cleanup");
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div> 이름 : {name}</div>
      <div> 이름 : {nickname}</div>
    </div>
  );
};

export default Info;
