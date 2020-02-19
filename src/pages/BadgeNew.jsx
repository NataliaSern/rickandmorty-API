import React, { Component } from "react";
import Badge from "../components/badge/Badge";
import BadgeForm from "../components/forms/BadgeForm";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";

class BadgeNew extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      tagName: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid pl-5" src={header} alt="Hero" />
        </div>

        <div className="container">
          <div class="alert alert-warning" role="alert">
            The profile created will not be sent to the list of attendees, the
            project is only a small demonstration of what can be achieved in
            React JS.
          </div>
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                tagName={this.state.form.tagName}
                email={this.state.form.email}
                avatarURL="https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg"
              />
            </div>
            <div className="col-6 mb-5">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
