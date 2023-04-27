import { Link } from 'react-router-dom';

const CreatePostLink = ({ myProfile }) => {
  //prettier-ignore
  return (myProfile._id)
  && <Link to="/create">Create Listing</Link>;
};

export default CreatePostLink;
