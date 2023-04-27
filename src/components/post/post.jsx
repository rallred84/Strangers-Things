import { useOutletContext, useParams } from 'react-router-dom';
import './post.css';
import { useState } from 'react';

const Post = () => {
  const { displayedPosts, myProfile } = useOutletContext();
  const { postId } = useParams();
  const post = displayedPosts.find((p) => p._id === postId);

  const [message, setMessage] = useState('');

  return (
    <div id="single-post-view">
      <h1 className="post-title">{post.title}</h1>
      <h3>Item Description: {post.description}</h3>
      <p>Seller: {post.author.username}</p>
      <p>Price: {post.price}</p>
      <p>Location: {post.location}</p>
      <p>
        {'('}Seller will {!post.willDeliver && 'not'} deliver{')'}{' '}
      </p>
      {myProfile._id && (
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
