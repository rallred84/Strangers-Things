const DeletePostScreenCover = ({
  setDeleteConfirm,
  handleDeletePost,
  postId,
  token,
}) => {
  return (
    <div id="delete-screen-cover">
      <div id="delete-box">
        <h2>Are you sure?</h2>
        <p>You cannot restore your post after you delete.</p>
        <div className="author-options">
          <button
            className="author-options-button edit"
            onClick={() => setDeleteConfirm(false)}
          >
            Nevermind
          </button>
          <button
            className="author-options-button delete"
            onClick={() => handleDeletePost(postId, token)}
          >
            Yes, Delete It!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePostScreenCover;
