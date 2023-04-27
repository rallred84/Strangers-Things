import { useOutletContext } from 'react-router-dom';

const Profile = () => {
  const { myProfile } = useOutletContext();

  return (
    <div id="profile">
      {myProfile._id && myProfile.data ? (
        <h3>Welcome to your profile, {myProfile.data.username}! </h3>
      ) : (
        <h3>Please Login</h3>
      )}
    </div>
  );
};

export default Profile;
