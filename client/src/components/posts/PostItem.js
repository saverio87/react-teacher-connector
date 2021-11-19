import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

import { PostItemCard } from "../layout/Card";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  showActions,
  post: { _id, text, name, user, likes, comments, date },
}) => {
  console.log(_id);

  return (
    <PostItemCard
      id={_id}
      likes={likes}
      comments={comments}
      linkToUser={`/profile/${user}`}
      linkToPost={`/posts/${_id}`}
      name={name}
      user={user}
      text={text}
      date={date}
      showActions={showActions}
    />
  );
};
// <div className="post bg-light my-1 p-1">
//   <div>
//     <Link to={`/profile/${user}`}>
//       <img className="round-img" src={avatar} alt="" />
//       <h4>{name}</h4>
//     </Link>
//   </div>

//   <div>
//     <p>{text}</p>

{
  /* Only show the buttons if showActions is true */
}

//   </div>
// </div>

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
