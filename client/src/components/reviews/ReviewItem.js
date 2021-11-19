import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import formatDate from "../../utils/formatDate";
import { ReviewItemCard } from "../layout/Card";

const ReviewItem = ({
  auth,
  review: {
    _id,
    formData: { emoticon, school, location, rating, comments },
    date,
    name,
  },
}) => {
  const averageRating =
    (rating.balance + rating.workplace + rating.management + rating.benefits) /
    4;

  return (
    <>
      <ReviewItemCard
        name={name}
        comments={comments}
        emoticon={emoticon}
        school={school}
        location={location}
        rating={averageRating.toFixed(1)}
        date={formatDate(date)}
        link={`/reviews/${_id}`}
      />
    </>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(ReviewItem);
