import {createContext, useEffect, useState} from "react";

// Create special context Object
export const BlogContext = createContext(null);

export function BlogProvider({children}) {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then(response => response.json())
  //       .then(json => setPosts(json))
  // }, []);

  const addPost = (post) => {
    setPosts([...posts, post]);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  const value = { posts, addPost, setPosts };

  return (
      <BlogContext.Provider value={value}>
        {children}
      </BlogContext.Provider>
  )
}