import { Link } from 'react-router-dom';

const CreatePostLink = ({ isLoggedIn }) => {
  //prettier-ignore
  return (isLoggedIn)
  && <Link to="/create">Create Listing</Link>;
};

export default CreatePostLink;
