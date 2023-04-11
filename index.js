const express = require("express");

const port = 8000;

const server = express();

const posts = [
  {
    id: 1,
    title: "post 1",
    content: "content 1",
  },
  {
    id: 2,
    title: "post 2",
    content: "content 2",
  },
  {
    id: 3,
    title: "post 3",
    content: "content 3",
  },
];

//! routes goes here
//* endpoint: /
server.get("/", (req, res) => {
  res.send("My Express API");
});

//* endpoint: /posts
const getAllPosts = (req, res) => {
  res.status(200).send(posts);
};

server.get("/posts", getAllPosts);

//* endpoint: /posts/:id

const getPostById = (req, res) => {
  const { id } = req.params;

  const post = posts.find((post) => post.id === parseInt(id));

  // console.log(post)
  if (post) {
    res.status(200).send(post);
  } else {
    res.status(404).send("Post not found");
  }
};

server.get("/posts/:id", getPostById);


server.listen(port, () => {
  console.log("Server listening on port ", port);
});
