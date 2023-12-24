import {useContext, useEffect} from "react";
import {BlogContext} from "../providers/blog-provider";
import {AuthContext} from "../providers/auth-provider";
import {useForm} from "react-hook-form";

export function Admin() {
  const {addPost} = useContext(BlogContext);
  const {user} = useContext(AuthContext);
  
  console.log(navigator.geolocation);
  useEffect(() => {
    console.log('I will run every time the array values change')

    
    return () => {
      const result = window.confirm('You will lost everything!')
    }
  }, []);


  const { register, handleSubmit, formState } = useForm();

  if(!user) {
    return <p>You must sign in first!</p>
  }

  const handleNewPostSubmit = (data) => {
    addPost({
       title: data.title,
       body: data.content
     })
  }

  return (
      <div className="text-center">
        <h1>Admin</h1>

        <input type="text" />

        <form className='form' onSubmit={handleSubmit(handleNewPostSubmit)}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" {...register('title')}/>
            {formState.errors.title && <span className="text-danger">Error in this field!</span>}
          </div>

          <div>
            <label htmlFor="content">Content</label>
            <textarea {...register('content', {minLength: 5})}></textarea>
            {formState.errors.content && <span className="text-danger">Error in this field!</span>}
          </div>

          <div>
            <label>Date</label>
            <input type="date" {...register('createdAt')} />
          </div>


          <div>
            <label htmlFor="accept terms">accept</label>
            <input type="checkbox" {...register('isTermsAccepted')}/>
          </div>


          <button type="submit">Create</button>
        </form>
      </div>
  );
}