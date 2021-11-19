// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { Link, withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import { updateExperience, getCurrentProfile } from "../../actions/profile";

// const initialState = {
//   title: "",
//   school: "",
//   location: "",
//   from: "",
//   to: "",
//   current: false,
//   description: "",
// };

// const UpdateExperience = ({}) => {
//   const [formData, setFormData] = useState(initialState);

//   useEffect(() => {
//     getCurrentProfile();
//     /* setFormData({
//       title: loading || !experience.title ? "" : experience.title,
//       school: loading || !experience.school ? "" : experience.school,
//       location: loading || !experience.location ? "" : experience.location,
//       from: loading || !experience.from ? "" : experience.from,
//       to: loading || !experience.to ? "" : experience.to,
//       current: loading || experience.to ? false : true,
//       description:
//         loading || !experience.description ? "" : experience.description,
//     }); */

//     // We want to automatically fill out the form with the existing information that we get from getCurrentProfile()
//   }, []);

//   const { title, school, location, from, to, current, description } = formData;

//   const [toDateDisabled, toggleDisabled] = useState(false);

//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <h1 className="large text-primary">Add An Experience</h1>
//       <p className="lead">
//         <i className="fas fa-code-branch"></i> Add any teaching experience that
//         you have had in the past
//       </p>
//       <small>* = required field</small>
//       <form
//         className="form"
//         onSubmit={(e) => {
//           e.preventDefault();
//           // updateExperience(to_update._id, formData, history);
//         }}
//       >
//         <div className="form-group">
//           <input
//             value={title}
//             onChange={(e) => onChange(e)}
//             type="text"
//             placeholder="* Job Title"
//             name="title"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             value={school}
//             onChange={(e) => onChange(e)}
//             type="text"
//             placeholder="* School"
//             name="school"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             value={location}
//             onChange={(e) => onChange(e)}
//             type="text"
//             placeholder="Location"
//             name="location"
//           />
//         </div>
//         <div className="form-group">
//           <h4>From Date</h4>
//           <input
//             value={from}
//             onChange={(e) => onChange(e)}
//             type="date"
//             name="from"
//           />
//         </div>
//         <div className="form-group">
//           <h4>To Date</h4>
//           <input
//             value={to}
//             onChange={(e) => onChange(e)}
//             type="date"
//             name="to"
//             disabled={toDateDisabled ? "disabled" : ""}
//           />
//         </div>
//         <div className="form-group">
//           <p>
//             <input
//               value={current}
//               checked={current}
//               onChange={(e) => {
//                 setFormData({ ...formData, current: !current });
//                 toggleDisabled((toDateDisabled) => !toDateDisabled);
//               }}
//               type="checkbox"
//               name="current"
//               value=""
//             />{" "}
//             Current Job
//           </p>
//         </div>
//         <div className="form-group">
//           <textarea
//             value={description}
//             onChange={(e) => onChange(e)}
//             name="description"
//             cols="30"
//             rows="5"
//             placeholder="Job Description"
//           ></textarea>
//         </div>
//         <input type="submit" className="btn btn-primary my-1" />
//         <Link className="btn my-1" to="dashboard.html">
//           Go Back
//         </Link>
//       </form>
//     </>
//   );
// };

// UpdateExperience.propTypes = {
//   updateExperience: PropTypes.func.isRequired,
//   experiences: PropTypes.array.isRequired,
//   profile: PropTypes.object.isRequired,
//   getCurrentProfile: PropTypes.func.isRequired,
// };

// export default connect(null, {
//   updateExperience,
//   getCurrentProfile,
// })(UpdateExperience);
