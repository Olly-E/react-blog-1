import BlogList from "./BlogList";

const Blogs = ({ blogs, onDelete }) => {

  return (
    <div>
      <BlogList blogs={blogs} onDelete={onDelete}/>
    </div>
  );
}

export default Blogs;
