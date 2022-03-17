import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1><Link to="/">Emma Blogs</Link></h1>
        <Navbar />
    </div>
  )
}

export default Header