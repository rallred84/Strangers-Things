const PostCards = ({ post }) => {
  console.log(post);
  return (
    <div className="card">
      <h3 className="post-title">{post.title}</h3>
      <p>Seller: {post.author.username}</p> <p>Location: {post.location}</p>{' '}
      <p>Item Description: {post.description}</p>{' '}
      <div className="card-buttons">
        <span className="message-button">Send Message</span>
      </div>
    </div>
  );
};

export default PostCards;
