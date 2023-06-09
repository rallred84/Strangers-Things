import { Link } from 'react-router-dom';

const PostCards = ({ post }) => {
  return (
    <div className={post.isAuthor ? 'card users-post' : 'card'}>
      <h3 className="post-title">{post.title}</h3>
      <p>Seller: {post.author.username}</p>
      <p>Price: {post.price}</p>
      <p>Item Description: {post.description}</p>
      <div className="card-buttons">
        <Link className="message-button" to={`/posts/${post._id}`}>
          See More
        </Link>
      </div>
    </div>
  );
};

export default PostCards;
