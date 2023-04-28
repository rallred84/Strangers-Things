const UserPosts = ({ myProfile }) => {
  return (
    <div>
      <h3>User Posts</h3>
      <p>
        You have {myProfile.posts.length} active
        {myProfile.posts.length === 0 || myProfile.posts.length > 1
          ? ' posts'
          : ' post'}
      </p>
      {myProfile.posts[0] &&
        myProfile.posts.map((p) => {
          return (
            <div key="p._id" className="profile-post-link">
              <h4>{p.title}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default UserPosts;
