import { Link } from 'react-router-dom';

const ViewListingsLink = ({ setDisplayedPosts, allPosts }) => {
  return (
    <Link to={'/posts'} onClick={() => setDisplayedPosts(allPosts)}>
      View Listings
    </Link>
  );
};

export default ViewListingsLink;
