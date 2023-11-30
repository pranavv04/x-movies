import React,{useState,useEffect} from 'react'
import './blog.css'
import BlogCard from '../components/BlogCard.jsx'

const Blog = () => {
    const[blogs,setBlogs] = useState([]);
    const fetchData = () => {
        fetch('https://pranavv04.github.io/movies-api/blogData.json')
          .then(res => res.json())
          .then(data => {
            setBlogs(data);
          })
          .catch(e => console.log(e.message));
      };
    
      useEffect(() => {
        fetchData()
      }, []);


  return (
    <section id="blogs">
      <div className="container-fluid">
        <div className="row">
            <h4 className='section-title'>Our Blog</h4>
        </div>
        <div className="row mt-5">
            {
                blogs && blogs.length>0 && blogs.map(blogs=>(
                    <BlogCard key={blogs._id} blog={blogs} />
                ))
            }
        </div>
      </div>
    </section>
  )
}

export default Blog
