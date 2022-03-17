import Blogs from './Blogs';
import useFetch from './useFetch';


const Home = () => {
const { data:blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')




  return (
    <div className="blogs">
        {error && <h1 className="error">{error}</h1>}
        { isLoading && <div>...Wait small</div>} 
        {blogs && <Blogs blogs={blogs} />}
    </div>
  );
}

export default Home;
