import { useOutletContext } from 'react-router-dom';
import PostFilter from './postsComponents/postFilter';
import PostCards from './postsComponents/postCards';
import './posts.css';

const Posts = () => {
  const { posts } = useOutletContext();

  return (
    <div>
      <PostFilter />
      <div id="post-list">
        {posts.map((post) => {
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
