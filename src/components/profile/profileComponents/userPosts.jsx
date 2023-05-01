import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserPosts = ({ myProfile }) => {
  const navigate = useNavigate();

  const activePosts = myProfile.posts.filter((post) => post.active);

  useEffect(() => {
    console.log(activePosts);
  }, []);

  return (
    <div className="profile-column">
      <h3>User Posts</h3>
      <p>
        You have {activePosts.length} active
        {activePosts.length === 0 || activePosts.length > 1
          ? ' posts'
          : ' post'}
      </p>
      <div className="profile-column-body">
        {activePosts[0] &&
          activePosts.map((p) => {
            console.log(p);
            const postDate = new Date(p.createdAt).toLocaleString();
            {
              return (
                p.active && (
                  <div
                    key={p._id}
                    className="profile-post-link"
                    onClick={() => navigate(`/posts/${p._id}`)}
                  >
                    <h4>{p.title}</h4>
                    <p>{p.messages.length} messages received</p>
                    <p>Created: {postDate}</p>
                  </div>
                )
              );
            }
          })}
      </div>
    </div>
  );
};

export default UserPosts;
