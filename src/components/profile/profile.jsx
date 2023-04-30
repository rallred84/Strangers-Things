import { useOutletContext } from 'react-router-dom';
import UserPosts from './profileComponents/userPosts';
import UserMessages from './profileComponents/userMessages';
import './profile.css';
import { useEffect } from 'react';
import { fetchMyProfile } from '../../api';

const Profile = () => {
  const { myProfile, setMyProfile, token } = useOutletContext();

  useEffect(() => {
    if (token !== '') {
      (async () => {
        const profileValues = await fetchMyProfile(token);
        setMyProfile(profileValues);
      })();
    }
  }, []);

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
