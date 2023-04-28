const UserMessages = ({ myProfile }) => {
  return (
    <div>
      <h3>User Messages</h3>
      <p>
        You have sent and received {myProfile.messages.length} total
        {myProfile.messages.length === 0 || myProfile.messages.length > 1
          ? ' messages'
          : ' message'}
      </p>
      {myProfile.messages[0] &&
        myProfile.messages.map((m) => {
          return (
            <div key={m._id} className="profile-post-link">
              <h4>{m.content}</h4>
              <p>From: {m.fromUser.username}</p>
            </div>
          );
        })}
    </div>
  );
};

export default UserMessages;
