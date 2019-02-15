import React from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component {
  renderModalContent = () => {
    return (
      <div className="ui dimmer modals visible active">
        <div className="ui standard modal visible active">
          <div className="header"> {this.props.title}</div>
          <div className="content">
            <p> {this.props.content}</p>
          </div>
          {this.props.actions}
        </div>
      </div>
    );
  };
  render() {
    return ReactDOM.createPortal(
      <div>{this.renderModalContent()}</div>,
      document.querySelector("#modal")
    );
  }
}

export default Modal;
