import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserMessages = ({ myProfile }) => {
  const allMessages = myProfile.messages;
  const sentMessages = allMessages.filter(
    (m) => m.fromUser.username === myProfile.username
  );
  const receivedMessages = allMessages.filter(
    (m) => m.fromUser.username !== myProfile.username
  );

  const [messageView, setMessageView] = useState('sent');

  const navigate = useNavigate();

  const Messages = ({ messages }) => {
    if (messages[0]) {
      return messages.map((m) => {
        return (
          <div
            key={m._id}
            className="profile-post-link"
            onClick={() => navigate(`/posts/${m.post._id}`)}
          >
            <h4>{m.content}</h4>
            {messages === sentMessages ? (
              <p>To: {m.post.author.username}</p>
            ) : (
              <p>From: {m.fromUser.username}</p>
            )}
            <p>re: {m.post.title}</p>
          </div>
        );
      });
    }
  };

  return (
    <div className="profile-column">
      <h3>User Messages</h3>
      <p>
        You have sent and received {allMessages.length} total
        {allMessages.length === 0 || allMessages.length > 1
          ? ' messages'
          : ' message'}
      </p>
      <div className="profile-column-body">
        <div className="message-type-select">
          <div
            className={
              messageView === 'sent'
                ? 'message-label-active'
                : 'message-label-inactive'
            }
          >
            <div
              className="message-label"
              onClick={() => setMessageView('sent')}
            >
              <p>Sent Messages</p>
            </div>
          </div>
          <div
            className={
              messageView === 'received'
                ? 'message-label-active'
                : 'message-label-inactive'
            }
          >
            <div
              className="message-label"
              onClick={() => setMessageView('received')}
            >
              <p>Received Messages</p>
            </div>
          </div>
        </div>
        <div>
          {messageView === 'sent' ? (
            <Messages messages={sentMessages} />
          ) : (
            <Messages messages={receivedMessages} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserMessages;
