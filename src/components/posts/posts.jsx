import { useOutletContext } from 'react-router-dom';
import PostFilter from './postsComponents/postFilter';
import PostCards from './postsComponents/postCards';
import './posts.css';

const Posts = () => {
  const { allPosts, displayedPosts, setDisplayedPosts, token } =
    useOutletContext();
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
