import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <Link className="nav-link" to="/NewBlog">Create new blogs</Link>
    </div>
  )
}

export default Navbar