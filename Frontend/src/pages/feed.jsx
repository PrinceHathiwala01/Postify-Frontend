import React, { useState,useEffect } from "react";
import axios from "axios";
const Feed = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            image: "https://ik.imagekit.io/phathiwala2223/image_UVcQeEct1.jpg",
            caption: "This is a sample post",
        }
    ]);
  
  useEffect(() => {
    axios.get("https://postify-mvdl.onrender.com/posts")
      .then((res) => {
        setPosts(res.data.post);
    })
   },[])
  
    return (
      <section className="feed-section">
        {
          posts.map((post) => (
            <div key={post.id} className="post">
              <img src={post.image} alt={`Post ${post.id}`} className="post-card" />
              <p className="post-caption">{post.caption}</p>
            </div>
          ))
          
        }
    </section>
  );
};
export default Feed;
