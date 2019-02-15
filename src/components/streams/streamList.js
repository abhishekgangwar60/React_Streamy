import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllStreamsAction } from "./../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchAllStreamsAction();
  }

  renderAdminFeatures = stream => {
    if (stream.userId && stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`stream/edit/${stream.id}`} className="ui primary button">
            Edit
          </Link>
          <Link
            to={`stream/delete/${stream.id}`}
            className="ui negative button"
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  renderCreateStreamOption = () => {
    if (this.props.isUserSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/stream/create" className="ui primary button">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    if (this.props.streams.length !== 0) {
      return this.props.streams.map(stream => {
        return (
          <div className="item" key={stream.id} style={{ padding: "10px" }}>
            {this.renderAdminFeatures(stream)}
            <i className="large middle aligned icon camera" />
            <div className="content" style={{ fontSize: "1.6rem" }}>
              {stream.title}
              <div className="description" style={{ fontSize: "1.2rem" }}>
                {stream.description}
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            lineHeight: "2rem"
          }}
        >
          Lol, so Empty !!! dude go get a life.
          <br />
          Or try creating streams.
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list"> {this.renderList()}</div>
        {this.renderCreateStreamOption()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isUserSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchAllStreamsAction }
)(StreamList);
