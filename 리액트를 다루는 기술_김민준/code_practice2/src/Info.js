import { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChange} />
        <input value={nickname} onChange={onChange} />
      </div>
      <div> 이름 : {name}</div>
      <div> 이름 : {nickname}</div>
    </div>
  );
};

export default Info;
