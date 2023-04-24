import { useOutletContext } from 'react-router-dom';
import PostFilter from './postsComponents/postFilter';
import PostCards from './postsComponents/postCards';
import './posts.css';
import { useEffect } from 'react';

const Posts = () => {
  const { allPosts, displayedPosts, setDisplayedPosts } = useOutletContext();

  useEffect(() => {
    setDisplayedPosts(allPosts);
  }, []);

  return (
    <div>
      <PostFilter
        displayedPosts={displayedPosts}
        setDisplayedPosts={setDisplayedPosts}
        allPosts={allPosts}
      />
      <div id="post-list">
        {displayedPosts.map((post) => {
          return (
            <div key={post._id}>
              <PostCards post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
