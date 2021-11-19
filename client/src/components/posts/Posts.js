import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";

import { getPosts } from "../../actions/post";
import PostForm from "./PostForm";
import { Header, Text } from "../../utils/styledComponents";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <>
      <Header>
        <Text color="#41a0b3" size="2rem">
          Bulletin Board
        </Text>
        <Text size="1.2rem">
          <i className="fas fa-user"></i> Welcome to the community
        </Text>
      </Header>

      <PostForm />
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
