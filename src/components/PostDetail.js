import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../api";
import PostComments from "./PostComments";

const PostDetail = (props) => {
  const { id } = props.match.params;
  const [postDetail, setPostDetail] = useState({});
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (e, comment) => {
    e.preventDefault();
    api()
      .post(`/posts/${id}/comments`, comment)
      .then((res) => {
        setComments([...comments, res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
      .then((responses) => {
        setPostDetail(responses[0].data);
        setComments(responses[1].data);
      })
      .catch((error) => {
        console.log(error);
      });

    // axios
    //   .get(`http://localhost:4001/posts/${id}`)
    //   .then((res) => {
    //     setPostDetail(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // axios.get(`http://localhost:4001/posts/${id}/comments`).then((res) => {
    //   setCommentList(res.data);
    // });
  }, []);

  return (
    <React.Fragment>
      <h2 className="ui header">{postDetail.title}</h2>
      <p>{postDetail.created_at}</p>
      <p>{postDetail.content}</p>
      <PostComments comments={comments} handleSubmit={handleCommentSubmit} />
    </React.Fragment>
  );
};

export default PostDetail;
