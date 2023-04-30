import { useOutletContext, useParams } from 'react-router-dom';
import './post.css';
import { useEffect, useState } from 'react';
import { fetchPosts, sendMessage } from '../../api';
import EditPost from './postComponents/editPost';

const Post = () => {
  const { displayedPosts, setDisplayedPosts, setAllPosts, myProfile, token } =
    useOutletContext();
  const { postId } = useParams();
  const post = displayedPosts.find((p) => p._id === postId);

  const [messageContent, setMessageContent] = useState('');

  const [editMode, setEditMode] = useState(false);

  const handleSubmit = async (e, postId, token, messageContent) => {
    e.preventDefault();
    const result = await sendMessage(postId, token, messageContent);
    const newAllPosts = await fetchPosts(myProfile, token);
    setDisplayedPosts(newAllPosts.data.posts);
    setAllPosts(newAllPosts.data.posts);

    setMessageContent('');
  };

  if (post) {
    return (
      <div className="single-post-data" id="single-post-view">
        {!editMode && (
          <>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-description post-attribute">Item Description:</p>
            <p className="post-description">{post.description}</p>
            <p>
              <span className="post-attribute">Seller:</span>{' '}
              <span className="post-inputs">{post.author.username}</span>
            </p>
            <p>
              <span className="post-attribute">Price:</span>{' '}
              <span className="post-inputs">{post.price}</span>
            </p>
            <p>
              <span className="post-attribute">Location:</span> {post.location}
            </p>
            <p className="post-inputs">
              {'('}Seller will {!post.willDeliver && 'not'} deliver{')'}{' '}
            </p>
          </>
        )}
        {myProfile._id && post.isAuthor && !editMode && (
          <div id="author-options">
            <button
              className="author-options-button edit"
              onClick={() => setEditMode(true)}
            >
              Edit Post
            </button>
            <button className="author-options-button delete">
              Delete Post
            </button>
          </div>
        )}
        {myProfile._id && post.isAuthor && editMode && (
          <EditPost
            post={post}
            setEditMode={setEditMode}
            myProfile={myProfile}
            token={token}
            setDisplayedPosts={setDisplayedPosts}
            setAllPosts={setAllPosts}
          />
        )}

        {myProfile._id && !post.isAuthor && (
          <form
            onSubmit={(e) => {
              handleSubmit(e, postId, token, messageContent);
            }}
          >
            <textarea
              value={messageContent}
              className="message-textbox"
              type="text"
              placeholder="Message Seller"
              onChange={(e) => {
                setMessageContent(e.target.value);
              }}
            />
            <button className="message-submit-button" type="submit">
              Send Message
            </button>
          </form>
        )}
        {post.messages[0] &&
          post.messages.map((m) => {
            const timeStamp = new Date(m.createdAt).toLocaleString();
            return (
              <div className="post-message" key={m._id}>
                <div className="message-content">
                  <p>{m.content}</p>
                </div>
                <div className="message-info">
                  <p>-{m.fromUser.username}</p>
                  <p>{timeStamp}</p>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
};

export default Post;
