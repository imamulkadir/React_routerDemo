import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();

  const postStyle = {
    border: "1px solid #ffffff",
    color: "#fff",
    borderRadius: "12px",
    padding: "16px",
    backgroundColor: "#6b6767",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "250px",
    textAlign: "center",
  };

  const hadnleShowDetail = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={postStyle}>
      <h3>Post ID: {id}</h3>
      <h2>{title}</h2>
      <Link to={`/post/${id}`}>
        <button>Post Details</button>
      </Link>
      <button onClick={hadnleShowDetail}>Click to Show Details</button>
    </div>
  );
};

export default Post;
