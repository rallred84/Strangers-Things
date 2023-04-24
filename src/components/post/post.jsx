import { useOutletContext, useParams } from 'react-router-dom';
import './post.css';
import { useState } from 'react';

const Post = () => {
  const { displayedPosts, isLoggedIn } = useOutletContext();
  const { postId } = useParams();
  const post = displayedPosts.find((p) => p._id === postId);

  const [message, setMessage] = useState('');

  return (
    <div id="single-post-view">
      <h1 className="post-title">{post.title}</h1>
      <h3>Item Description: {post.description}</h3>
      <p>Seller: {post.author.username}</p>
      <p>Location: {post.location}</p>
      {isLoggedIn && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(message);
            setMessage('');
          }}
        >
          <textarea
            value={message}
            type="text"
            placeholder="Message Seller"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Post;
