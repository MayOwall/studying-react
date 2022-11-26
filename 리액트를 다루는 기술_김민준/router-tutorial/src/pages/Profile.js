import { useParams } from "react-router-dom";

const data = {
  mayowall: {
    name: "오월",
    description: "리액트 좋아하는 개발자",
  },
  react: {
    name: "리액트",
    description: "개발자 좋아하는 리액트",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>Profile</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다</p>
      )}
    </div>
  );
};

export default Profile;
