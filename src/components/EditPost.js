import React, { useEffect, useState } from "react";
import { api } from "../api";
import PostForm from "./PostForm";

const EditPost = (props) => {
  const [post, setPost] = useState({});
  const { id } = props.match.params;

  useEffect(() => {
    api()
      .get(`/posts/${id}`)
      .then((res) => {
        const { title, content } = res.data;
        setPost({ title, content });
      });
  }, []);

  return (
    <div>
      <h1>Yazı Düzenleme Formu</h1>
      <PostForm post={post} />
    </div>
  );
};

export default EditPost;
