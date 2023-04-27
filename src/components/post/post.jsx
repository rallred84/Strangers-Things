import { useOutletContext, useParams } from 'react-router-dom';
import './post.css';
import { useEffect, useState } from 'react';
import { sendMessage } from '../../api';

const Post = () => {
  const { displayedPosts, myProfile, token } = useOutletContext();
  const { postId } = useParams();
  const post = displayedPosts.find((p) => p._id === postId);

  const [messageContent, setMessageContent] = useState('');

  const handleSubmit = async (e, postId, token, messageContent) => {
    e.preventDefault();
    const result = await sendMessage(postId, token, messageContent);
    console.log(result);
    setMessageContent('');
  };

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
            handleSubmit(e, postId, token, messageContent);
          }}
        >
          <textarea
            value={messageContent}
            type="text"
            placeholder="Message Seller"
            onChange={(e) => {
              setMessageContent(e.target.value);
            }}
          />
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Post;
