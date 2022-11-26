import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <p>welcome to home : )</p>
      <ul>
        <li>
          <Link to={"/about"}>소개 페이지로 이동하기</Link>
        </li>
        <li>
          <Link to={"/profile/mayowall"}>오월의 프로필 페이지로 이동하기</Link>
        </li>
        <li>
          <Link to={"/profile/react"}>리액트의 프로필 페이지로 이동하기</Link>
        </li>
        <li>
          <Link to={"/articles"}>Article 페이지로 이동하기</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
