import React, { useEffect, useState } from "react";
import axios from "axios";

const PostDetail = (props) => {
  const { id } = props.match.params;
  const [postDetail, setPostDetail] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4001/posts/${id}`)
      .then((res) => {
        setPostDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <h2 className="ui header">{postDetail.title}</h2>
      <p>{postDetail.created_at}</p>
      <p>{postDetail.content}</p>
    </React.Fragment>
  );
};

export default PostDetail;
