import { useState } from 'react';

const PostFilter = ({ allPosts, setDisplayedPosts }) => {
  const [searchValue, setSearchValue] = useState('');

  function filterPosts(e, searchValue) {
    e.preventDefault();
    const filteredPostsReturn = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.author.username
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        post.location.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.description.toLowerCase().includes(searchValue.toLowerCase())
    );
    setDisplayedPosts(filteredPostsReturn);
  }

  return (
    <form onSubmit={(e) => filterPosts(e, searchValue)}>
      <input
        value={searchValue}
        placeholder="Search through listings"
        id="search-value"
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default PostFilter;
