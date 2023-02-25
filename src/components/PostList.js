import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/posts").then((res) => {
      setPostList(res.data);
    });
  }, []);

  return (
    <div className="ui relaxed divided list">
      {postList.map((post) => {
        return (
          <div className="item" key={post.id}>
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`/posts/${post.id}`} className="header">
                {post.title}
              </Link>
              <div className="description">{post.created_at}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
