import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);

  return (
    <>
      <div className="container">
        <h2>there are {posts.length} post in the database </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((posts) => (
              <tr>
                <td key={posts.id}>{posts.title}</td>
                <td>
                  <button className="btn btn-info btn-sm "> Update </button>
                </td>
                <td>
                  <button className="btn btn-danger btn-sm "> Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
