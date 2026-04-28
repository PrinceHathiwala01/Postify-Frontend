import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios.post("https://postify-mvdl.onrender.com/create-post", formData)
      .then((res) => {
        console.log(res);
        navigate("/feed");
      })
      .catch((err) => {
        console.log(err);
        alert("Upload failed");
      });
  };

  const handleFeedCheck = () => {
    navigate("/feed");
  };

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>
      <form onSubmit={handelSubmit}>
        <input type="file" name="image" accept="image/*" required />
        <input type="text" name="caption" placeholder="Enter caption" required />
        <div>
          <button type="submit" className="btn1">Submit</button>
          <button type="button" className="btn1" onClick={handleFeedCheck}>
            Feed Check
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;