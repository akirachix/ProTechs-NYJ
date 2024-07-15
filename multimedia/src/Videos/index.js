import './index.css';
import { FaRegCirclePlay } from "react-icons/fa6";

const Video = () => {
    return (
        <div id="video-gallery">
             <div> 
           <h1 className='video-text'>Videos</h1>
        </div>
        <div className='videos'>
            <div className="video-item">
                <a href="https://www.loom.com/share/8930ac324f5f4355aee188cbbaaf5ae6">
                    <p>Watch Video</p>
                </a>
                <a href="https://www.loom.com/share/8930ac324f5f4355aee188cbbaaf5ae6">
                    <img alt="video" src="https://cdn.loom.com/sessions/thumbnails/8930ac324f5f4355aee188cbbaaf5ae6-with-play.gif" />
                    <FaRegCirclePlay />
                </a>
            </div>
            <div className="video-item">
                <a href="https://www.loom.com/share/8fc1b998cc7a4e4fb1f1310a8312c49f">
                    <p>Watch Video</p>
                </a>
                <a href="https://www.loom.com/share/8fc1b998cc7a4e4fb1f1310a8312c49f">
                    <img alt="video" src="https://cdn.loom.com/sessions/thumbnails/8fc1b998cc7a4e4fb1f1310a8312c49f-with-play.gif" />
                    <FaRegCirclePlay />
                </a>
            </div>
            <div className="video-item">
                <a href="https://www.loom.com/share/1262a0b23e3a4d45aa6060044968d0b1">
                    <p>Watch Video</p>
                </a>
                <a href="https://www.loom.com/share/1262a0b23e3a4d45aa6060044968d0b1">
                    <img alt="video" src="https://cdn.loom.com/sessions/thumbnails/1262a0b23e3a4d45aa6060044968d0b1-with-play.gif" />
                    <FaRegCirclePlay />
                </a>
            </div>
            <div className="video-item">
                <a href="https://www.loom.com/share/7a3a2d774b924969805b29240f0f9718">
                    <p>Watch Video</p>
                </a>
                <a href="https://www.loom.com/share/7a3a2d774b924969805b29240f0f9718">
                    <img alt="video" src="https://cdn.loom.com/sessions/thumbnails/7a3a2d774b924969805b29240f0f9718-with-play.gif" />
                    <FaRegCirclePlay />
                </a>
            </div>
        </div>
        </div>
    );
};

export default Video;

