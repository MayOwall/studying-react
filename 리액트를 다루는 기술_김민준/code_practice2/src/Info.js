import useInput from "./useInputs";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, onChange] = useInput(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

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
