import React, { useEffect, useState } from "react";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // GET
  const loadPosts = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setPosts(result.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  // POST
  const addPost = async () => {
    if (title === "" || body === "") {
      alert("Please enter title and body");
      return;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
    });

    const newPost = await response.json();

    setPosts([newPost, ...posts]);
    setTitle("");
    setBody("");
  };

  // PUT
  const editPost = async (post) => {
    const updatedTitle = prompt("Enter new title", post.title);
    const updatedBody = prompt("Enter new body", post.body);

    if (updatedTitle === null || updatedBody === null) return;

    await fetch(`${url}/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: post.id,
        title: updatedTitle,
        body: updatedBody,
        userId: 1,
      }),
    });

    setPosts(
      posts.map((item) =>
        item.id === post.id
          ? { ...item, title: updatedTitle, body: updatedBody }
          : item
      )
    );
  };

  // DELETE
  const deletePost = async (id) => {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    setPosts(posts.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fetch API CRUD Operations</h2>

      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button onClick={addPost} style={{ marginLeft: "10px" }}>
        Add Post
      </button>

      <hr />

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>

          <button onClick={() => editPost(post)}>Edit</button>

          <button
            onClick={() => deletePost(post.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;