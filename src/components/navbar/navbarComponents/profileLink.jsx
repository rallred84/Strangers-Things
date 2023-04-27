import { Link } from 'react-router-dom';

const ProfileLink = ({ myProfile }) => {
  //prettier-ignore
  return (myProfile._id) 
  && <Link to={'/profile'}>Profile</Link>;
};

export default ProfileLink;
