import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email, website, phone } = user;

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default UserDetails;
