import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://postifycloud.onrender.com";

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            image: "https://ik.imagekit.io/phathiwala2223/image_UVcQeEct1.jpg",
            caption: "This is a sample post",
        }
    ]);
    const [error, setError] = useState("");
  
  useEffect(() => {
    axios.get(`${API_URL}/posts`)
      .then((res) => {
        const fetchedPosts = res.data.posts || res.data.post || [];
        setPosts(Array.isArray(fetchedPosts) ? fetchedPosts : []);
        setError("");
    })
      .catch((err) => {
        console.log(err);
        setError(err.response?.data?.message || "Posts could not be loaded");
      });
   },[])
  
    return (
      <section className="feed-section">
        {error && <p className="post-caption">{error}</p>}
        {
          posts.map((post) => (
            <div key={post._id || post.id || post.image} className="post">
              <img src={post.image} alt={post.caption || "Post"} className="post-card" />
              <p className="post-caption">{post.caption}</p>
            </div>
          ))
          
        }
    </section>
  );
};
export default Feed;
