import { useOutletContext } from 'react-router-dom';
import UserPosts from './profileComponents/userPosts';
import UserMessages from './profileComponents/userMessages';
import './profile.css';

const Profile = () => {
  const { myProfile } = useOutletContext();

  return (
    <div id="profile">
      {myProfile._id ? (
        <>
          <h2>Welcome to your profile, {myProfile.username}! </h2>
          <div className="profile-body">
            <UserPosts myProfile={myProfile} />
            <UserMessages myProfile={myProfile} />
          </div>
        </>
      ) : (
        <h3>Please Login</h3>
      )}
    </div>
  );
};

export default Profile;
