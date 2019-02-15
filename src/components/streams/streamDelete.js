import React from "react";
import Modal from "../modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchSingleStreamAction, signIn } from "./../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchSingleStreamAction(this.props.match.params.id);
  }

  renderActions = () => {
    return (
      <div className="actions">
        <button className="ui negative button">Delete</button>
        <button className="ui cancel button">Cancel</button>
      </div>
    );
  };

  renderStreamDeleteModal = () => {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content="Are you sure, You want to delete this stream? "
          actions={this.renderActions()}
        />
      </div>
    );
  };

  render() {
    const { stream } = this.props;
    if (stream) {
      return (
        <div>
          <div
            style={{
              textAlign: "center",
              fontSize: "1.6rem",
              fontWeight: "800"
            }}
          >
            Stream Delete{" "}
          </div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              lineHeight: "1.6rem"
            }}
          >
            Stream Title - {stream.title} <br />
            Stream Description - {stream.description}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem"
            }}
          >
            <Link to="/" className="ui  button">
              Cancel
            </Link>
            <button
              className="ui negative button"
              onClick={this.renderStreamDeleteModal}
            >
              Delete
            </button>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchSingleStreamAction }
)(StreamDelete);
