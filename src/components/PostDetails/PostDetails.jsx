import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, userId, title, body } = post;
  const navigate = useNavigate();
  const { postId } = useParams();

  console.log(postId);

  const handleGoBackToPost = () => {
    // navigate("/posts");
    navigate(-1); // 1 step backward
  };
  return (
    <div>
      <h3>
        POST ID: {id}, USER ID: {userId}
      </h3>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={handleGoBackToPost}>Return to posts</button>
    </div>
  );
};

export default PostDetails;
