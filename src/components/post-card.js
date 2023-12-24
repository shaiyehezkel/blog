import {Link} from "react-router-dom";

export function PostCard({ singlePost ,onEdit, onDelete}) {
  return (
      <div className='card'>
        <div className='card-header'>
          {singlePost.title}
        </div>
        <div className='card-body'>
          {singlePost.body}
        </div>
        <div className='card-footer'>
        <button onClick={() => onEdit(singlePost.id)} className='btn btn-warning'>
          Edit
        </button>
        <button onClick={() => onDelete(singlePost.id)} className='btn btn-danger'>
        Delete
        </button>
        </div>
        <Link to={ `/posts/${singlePost.id}` }
              className='btn btn-primary'>
          Read more
        </Link>
      </div>
  )
}