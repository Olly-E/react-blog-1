const BlogList = ({ blogs, onDelete }) => {

  return (
    <div>
        {blogs.map(blog => (
            <div className="blog-preview" key={blog.id}>
                <h3>{blog.title}</h3>
                <p>{blog.author}</p>
            </div>
        ))}
    </div>
  );
}

export default BlogList;
