import { useEffect, useState } from 'react';
import './createPost.css';
import { useOutletContext } from 'react-router-dom';
import { createNewPost } from '../../api';

const CreatePost = () => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemLocation, setItemLocation] = useState('');
  const [willDeliverItem, setWillDeliverItem] = useState(false);
  const { token } = useOutletContext();

  function handleCreatePost(e) {
    e.preventDefault();
    console.log('create post' + willDeliverItem.toString());
    setItemName('');
    setItemDescription('');
    setItemPrice('');
    setItemLocation('');
    createNewPost(
      itemName,
      itemDescription,
      itemPrice,
      itemLocation,
      willDeliverItem,
      token
    );
  }

  return (
    <div>
      <h3>Create Your Own Listing</h3>
      <p>What are you wanting to sell?</p>
      <form id="create-post-form" onSubmit={(e) => handleCreatePost(e)}>
        <input
          type="text"
          value={itemName}
          placeholder="Name of item *"
          required
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          value={itemDescription}
          type="text"
          placeholder="Item Description *"
          required
          onChange={(e) => setItemDescription(e.target.value)}
        />
        <input
          value={itemPrice}
          type="text"
          placeholder="Price ($$) *"
          required
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <input
          value={itemLocation}
          type="text"
          placeholder="Item Location"
          onChange={(e) => setItemLocation(e.target.value)}
        />
        <div className="will-deliver">
          <label htmlFor="will-deliver">Will Deliver?</label>
          <select
            name="will-deliver"
            defaultValue={false}
            onChange={(e) => setWillDeliverItem(e.target.value)}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Create Your Listing!</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
