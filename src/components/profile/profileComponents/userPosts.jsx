import { useNavigate } from 'react-router-dom';

const UserPosts = ({ myProfile }) => {
  const navigate = useNavigate();

  return (
    <div className="profile-column">
      <h3>User Posts</h3>
      <p>
        You have {myProfile.posts.length} active
        {myProfile.posts.length === 0 || myProfile.posts.length > 1
          ? ' posts'
          : ' post'}
      </p>
      <div key="p._id" className="profile-column-body">
        {myProfile.posts[0] &&
          myProfile.posts.map((p) => {
            const postDate = new Date(p.createdAt).toLocaleString();
            return (
              <div
                key="p._id"
                className="profile-post-link"
                onClick={() => navigate(`/posts/${p._id}`)}
              >
                <h4>{p.title}</h4>
                <p>{p.messages.length} messages received</p>
                <p>Created: {postDate}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserPosts;
