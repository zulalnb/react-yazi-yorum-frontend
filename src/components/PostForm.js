import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { api } from "../api";

const PostForm = (props) => {
  const [post, setPost] = useState({ title: "", content: "" });
  const [error, setError] = useState("");

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setError("");
    api()
      .post("/posts", post)
      .then((res) => {
        props.history.push("/");
      })
      .catch((error) => {
        setError("Başlık ve yazı içeriği alanları zorunludur.");
      });
  };

  return (
    <React.Fragment>
      {error && (
        <div className="ui error message">
          <div className="header">Hata</div>
          <p>{error}</p>
        </div>
      )}
      <div className="ui form">
        <div className="field">
          <label>Yazı Başlığı</label>
          <input
            value={post.title}
            type="text"
            name="title"
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Yazı İçeriği</label>
          <textarea
            value={post.content}
            rows="2"
            name="content"
            onChange={onInputChange}
          ></textarea>
        </div>
        <button className="ui primary button" onClick={onFormSubmit}>
          Gönder
        </button>
        <button className="ui button">İptal Et</button>
      </div>
    </React.Fragment>
  );
};

export default withRouter(PostForm);