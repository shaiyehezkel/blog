import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../providers/blog-provider";
import { PostCard } from "../components/post-card";

export function Posts() {
  const { posts, setPosts } = useContext(BlogContext);
  const [query, setQuery] = useState('');
  const handleDelete = (postId) => {const updatedPosts = posts.filter(post => post.id !== postId);
  setPosts(updatedPosts);
  localStorage.setItem('posts', JSON.stringify(updatedPosts));
};
  const handleEdit = (postId) => {alert(`Editing post with ID ${postId}`);
};

  const handleUserInput = (evt) => {
    setQuery(evt.target.value);
  }

  useEffect(() => {
    const string = localStorage.getItem('posts');
    setPosts(JSON.parse(string));
  }, [setPosts]); // Run the effect when setPosts changes

  // Check if posts is null or undefined before accessing its properties
  const postsCount = posts ? posts.length : 0;

  useEffect(() => {
  
  }, [posts]); 

  return (
    <div>
      <h2>Posts: {postsCount}</h2>
      <p>{postsCount > 0 ? "Here is the list of my posts!" : "There are 0 posts currently..."}</p>
      <input onChange={handleUserInput} className='form-control-lg'/>
      <pre>{query}</pre>
      {Array.isArray(posts) &&
        posts
          .filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
          .map((post) => (
            <PostCard key={post.id} singlePost={post}  onDelete={() => handleDelete(post.id)} onEdit={() => handleEdit(post.id)}/>
          ))
      }
      <button onClick={() => console.log("Load more clicked")}>Load more</button>
    </div>
  );
}
