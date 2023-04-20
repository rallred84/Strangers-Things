import { useOutletContext } from 'react-router-dom';
import PostFilter from './components/postFilter';
import PostCards from './components/postCards';
import './posts.css';

const Posts = () => {
  const { posts } = useOutletContext();
  console.log(posts);

  return (
    <div>
      <PostFilter />
      <div id="post-list">
        {posts.map((post) => {
          return (
            <div key={posts._id}>
              <PostCards post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
