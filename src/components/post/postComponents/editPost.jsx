import { useState } from 'react';
import { fetchPosts, updatePost } from '../../../api';

const EditPost = ({
  post,
  setEditMode,
  token,
  myProfile,
  setDisplayedPosts,
  setAllPosts,
}) => {
  const [itemName, setItemName] = useState(post.title);
  const [itemDescription, setItemDescription] = useState(post.description);
  const [itemPrice, setItemPrice] = useState(post.price);
  const [itemLocation, setItemLocation] = useState(post.location);
  const [willDeliverItem, setWillDeliverItem] = useState(false);

  const handleEditPost = async (
    e,
    postToUpdate,
    token,
    itemName,
    itemDescription,
    itemPrice,
    itemLocation,
    willDeliverItem
  ) => {
    e.preventDefault();
    console.log('edit');

    const updatedPost = await updatePost(
      postToUpdate,
      token,
      itemName,
      itemDescription,
      itemPrice,
      itemLocation,
      willDeliverItem
    );
    const newAllPosts = await fetchPosts(myProfile, token);
    setDisplayedPosts(newAllPosts.data.posts);
    setAllPosts(newAllPosts.data.posts);
    console.log(updatePost);

    setEditMode(false);
  };

  return (
    <form
      className="single-post-data"
      id="edit-post-form"
      onSubmit={(e) =>
        handleEditPost(
          e,
          post._id,
          token,
          itemName,
          itemDescription,
          itemPrice,
          itemLocation,
          willDeliverItem
        )
      }
    >
      <div className="edit-section">
        <input
          className="post-title"
          value={itemName}
          type="text"
          name="item-name"
          placeholder="Name of item *"
          required
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <div className="description-edit">
        <label htmlFor="item-description" className="post-description">
          <span className="post-attribute">Item Description:</span>
        </label>
        <textarea
          value={itemDescription}
          className="post-description"
          type="text"
          name="item-description"
          placeholder="Item Description *"
          required
          onChange={(e) => setItemDescription(e.target.value)}
        />
      </div>
      <p>
        <span className="post-attribute">Seller:</span> {post.author.username}
      </p>
      <div className="edit-section">
        <label htmlFor="item-price">
          <span className="post-attribute">Price:</span>{' '}
        </label>
        <input
          value={itemPrice}
          className="post-inputs"
          type="text"
          name="item-price"
          placeholder="Price ($$) *"
          required
          onChange={(e) => setItemPrice(e.target.value)}
        />
      </div>
      <div className="edit-section">
        <label htmlFor="item-location">
          <span className="post-attribute">Location:</span>{' '}
        </label>
        <input
          value={itemLocation}
          className="post-inputs"
          type="text"
          name="item-location"
          placeholder="Item Location"
          onChange={(e) => setItemLocation(e.target.value)}
        />
      </div>
      <p>
        {'('}Seller{' '}
        <select
          name="will-deliver"
          className="post-inputs"
          defaultValue={post.willDeliver ? true : false}
          onChange={(e) => setWillDeliverItem(e.target.value)}
        >
          <option value={true}>will</option>
          <option value={false}>will not</option>
        </select>{' '}
        deliver{')'}
      </p>
      <div>
        <button type="submit" id="edit-button">
          Confirm Edit
        </button>
        <button id="edit-cancel-button" onClick={() => setEditMode(false)}>
          Cancel Edit
        </button>
      </div>
    </form>
  );
};

export default EditPost;
