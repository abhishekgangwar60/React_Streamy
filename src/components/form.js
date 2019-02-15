import React from "react";
import { reset, reduxForm, Field } from "redux-form";

/**
 * A Form based on Redux form, Accepts numerous numbers of Input and what not.
 * Mandatory props - fields (an array of {title: 'field title'}) -- todo add more values on this
 */
class Form extends React.Component {
  renderCustomComponent = ({ title, input, meta }) => {
    return (
      <div>
        <div style={{ margin: "8%" }}>
          <label>{title}</label>
          <input {...input} autoComplete="off" />
          <div style={{ padding: "5px 0", color: "red" }}>
            {meta.touched && meta.error ? meta.error : ""}
          </div>
        </div>
      </div>
    );
  };

  renderFields = fields => {
    return fields.map(field => {
      return (
        <Field
          name={field.name}
          key={field.title}
          title={field.title}
          component={this.renderCustomComponent}
        />
      );
    });
  };

  onSubmit = (formValues, dispatch) => {
    this.props.onFormSubmit(formValues);
    dispatch(reset("streamsForm"));
  };

  render() {
    return (
      <div>
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <div>{this.renderFields(this.props.fields)}</div>
          <button className="ui primary button">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  let error = {};
  if (!formValues.title) {
    error.title = "Enter Title";
  }
  if (!formValues.description) {
    error.description = "Enter Description";
  }
  return error;
};

export default reduxForm({
  form: "streamsForm",
  validate
})(Form);
