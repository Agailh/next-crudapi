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

  const addPost = async () => {
    const post = { title: "New Post", body: "new" };
    axios.post(apiEndPoint, post);
    await axios.post(apiEndPoint, post);
    setPosts([post, ...posts]);
  };

  const handleUpdate = async (post) => {
    post.title = "update title";
    await axios.put(apiEndPoint + "/" + post.id);
    const postsClone = [...posts];
    const index = postsClone.indexOf(post);
    postsClone[index] = { ...post };
    setPosts(postsClone);
  };

  return (
    <>
      <div className="container">
        <h2>there are {posts.length} post in the database </h2>
        <button onClick={addPost} className=" btn btn-primary">
          Add Post
        </button>
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
                  <button onClick={() => handleUpdate(posts)} className="btn btn-info btn-sm ">
                    {" "}
                    Update{" "}
                  </button>
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
