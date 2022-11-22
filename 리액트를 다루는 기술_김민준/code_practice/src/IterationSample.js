const IterationSample = () => {
    const members = ["짱구", "철수", "맹구", "유리", "훈이"];
    const memberList = members.map((member, idx) => (
        <li key={idx}>{member}</li>
    ));
    return <ul>{memberList}</ul>;
};

export default IterationSample;
