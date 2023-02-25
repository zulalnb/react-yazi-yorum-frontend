import React from "react";

const CommentList = (props) => {
  return (
    <React.Fragment>
      <h3>Yorumlar</h3>
      <div className="ui relaxed list">
        {props.comments.map((comment) => {
          return (
            <div className="item" key={comment.id}>
              <div className="content">
                <span className="header">{comment.display_name}</span>
                <div className="description">{comment.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default CommentList;
