import "./index.css"
import { Link } from "react-router-dom";


const Blog =()=>{
  return(
    <div>
      <div>
        <h1>Blog</h1>
        <h1>Born A crime</h1>
      </div>
      <div id="Media">
        <div>
        <img id="book" src="MediaBlog/Born A Crime.jpeg" alt="Born a Crime"/>
        </div>
        <div id="book-details">
        <p>The book details Trevor Noah's experiences growing up in Johannersburg, SouthAfrica</p>
        <p>during the apartheid era. Noah's parents were a white Swiss German father and a Xhosa </p>
        <p>mother at the time of trevor Noah's birth in 1984, their interracial relationship was </p>
        <p>illegal under the immorality Act. According to Noah for him to be a mixed raced baby was</p>
        <p>be born a crime. Interracial relations were decriminalised when the immorality act was </p>
        <p>ammended in 1985. As a mised race person Noah was classified as a coloured in accordance</p>
        <p>to the apartheid system of racial classification. Noah was raised primarily by his mother</p>
        <button id="button"><Link to="/Summary">Read More</Link></button>
        </div>
      </div>
    </div>
  )
  
}

export default Blog;