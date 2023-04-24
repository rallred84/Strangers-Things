import { Link } from 'react-router-dom';

const ProfileLink = ({ isLoggedIn }) => {
  //prettier-ignore
  return (isLoggedIn) 
  && <Link to={'/profile'}>Profile</Link>;
};

export default ProfileLink;
