import { useOutletContext } from 'react-router-dom';

const Posts = () => {
  const { posts } = useOutletContext();
  console.log(posts);

  return posts.map((post) => {
    return <div key={posts._id}>{post.title}</div>;
  });
};

export default Posts;
