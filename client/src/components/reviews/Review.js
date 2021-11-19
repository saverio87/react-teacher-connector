import React, { useEffect } from "react";
import { getReviewById } from "../../actions/review";
import { ReviewAccordion } from "./ReviewAccordion";
import { ReviewCard } from "../layout/Card";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import { PlainLink, SecondaryButton } from "../../utils/styledComponents";

const Review = ({
  getReviewById,
  review: { loading, review },
  auth,
  match,
}) => {
  useEffect(() => {
    getReviewById(match.params.id);
  }, [getReviewById, match.params.id]);

  return (
    <>
      {!review || loading ? (
        <Spinner />
      ) : (
        <>
          <ReviewCard review={review} />
          <PlainLink to="/reviews" className="d-grid py-3">
            <SecondaryButton fontSize="1.5rem">Back to reviews</SecondaryButton>
          </PlainLink>
        </>
      )}
    </>
  );
};

Review.propTypes = {
  getReviewById: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  review: state.review,
  auth: state.auth,
});

export default connect(mapStateToProps, { getReviewById })(Review);
