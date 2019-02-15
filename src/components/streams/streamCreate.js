import React from "react";
import Form from "./../form";
import { createStreamAction } from "./../../actions";

import { connect } from "react-redux";

class StreamCreate extends React.Component {
  onStreamSubmit = formValues => {
    this.props.createStreamAction(formValues);
  };

  render() {
    return (
      <div
        className="ui"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div style={{ margin: "5%" }}>
          <label>
            <h3>Stream Create</h3>
          </label>
        </div>
        <Form
          fields={[
            {
              name: "title",
              title: "Stream Title"
            },
            {
              name: "description",
              title: "Stream Description"
            }
          ]}
          onFormSubmit={this.onStreamSubmit}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { createStreamAction }
)(StreamCreate);
