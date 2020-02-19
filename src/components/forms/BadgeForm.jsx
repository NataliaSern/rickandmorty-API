import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BadgeForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              onChange={this.props.onChange}
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Tag Name</label>
            <input
              className="form-control"
              type="text"
              name="tagName"
              onChange={this.props.onChange}
              value={this.props.formValues.tagName}
            />
          </div>
          <Link to="/">
            <button onClick={this.handleClick} className="btn btn-primary">
              Save
            </button>
          </Link>
        </form>
      </React.Fragment>
    );
  }
}
