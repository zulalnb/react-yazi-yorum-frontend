import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { api } from "../api";
import PostComments from "./PostComments";
import DeleteModal from "./DeleteModal";

const PostDetail = () => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState({});
  const [comments, setComments] = useState([]);

  const history = useHistory();

  const handleCommentSubmit = (e, comment) => {
    e.preventDefault();
    api()
      .post(`/posts/${id}/comments`, comment)
      .then((res) => {
        console.log(res.data);
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
      <div className="ui buttons">
        <Link className="ui blue button" to={`/posts/${postDetail.id}/update`}>
          Düzenle
        </Link>
        <DeleteModal post={postDetail} push={history.push} />
      </div>
      <p>{postDetail.content}</p>
      <PostComments comments={comments} handleSubmit={handleCommentSubmit} />
    </React.Fragment>
  );
};

export default PostDetail;
