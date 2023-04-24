import { useOutletContext } from 'react-router-dom';

const Profile = () => {
  const { isLoggedIn, myProfile } = useOutletContext();

  return (
    <div id="profile">
      {isLoggedIn && myProfile.data ? (
        <h3>Welcome to your profile, {myProfile.data.username}! </h3>
      ) : (
        <h3>Please Login</h3>
      )}
    </div>
  );
};

export default Profile;
