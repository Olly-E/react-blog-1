import { useState } from "react";


const NewBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  return (
    <div>
        <form className="create">
        <label className="labels title-label" htmlFor="">Blog title</label>
        <input placeholder="Title here" className="boxes title-input" type="text"  value={title} onChange={(e) => setTitle(e.target.value)} />
        <label className="labels content-label" htmlFor="">Content</label>
        <textarea placeholder="What have you got to say..." className="boxes content-input" cols="30" rows="10" onChange={(e) => setContent(e.target.value)}  value={content}>
        </textarea>
        <label className="labels author-label" htmlFor="">Author</label>
        <input placeholder="who this?" className="boxes author-input" type="text"  value={author} onChange={(e) => setAuthor(e.target.value)}/>
        <button className="btn">POST</button>
    </form>
    </div>
  );
}

export default NewBlog;
