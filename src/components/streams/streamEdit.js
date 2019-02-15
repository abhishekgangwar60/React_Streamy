import React from "react";
import { connect } from "react-redux";
import { editStreamAction, fetchSingleStreamAction } from "./../../actions";
import Form from "./../form";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchSingleStreamAction(this.props.match.params.id);
  }

  onStreamEditSubmit = formValues => {
    this.props.editStreamAction({ id: this.props.streamId, data: formValues });
  };

  render() {
    if (this.props.streamData) {
      const { streamData } = this.props;
      return (
        <div>
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
                <h3>Stream Edit</h3>
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
              initialValues={streamData}
              onFormSubmit={this.onStreamEditSubmit}
            />
          </div>
        </div>
      );
    } else {
      return <div>Loading ..</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    streamId: ownProps.match.params.id,
    streamData: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { editStreamAction, fetchSingleStreamAction }
)(StreamEdit);
