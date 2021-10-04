import React from "react";
import Form from "../common/form";
import Input from "../common/input";
import ComboBox from "../common/comboBox";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "", accountType: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().required().label("Password"),
    accountType: Joi.string().required().label("Account Type"),
  };

  doAction = () => {
    console.log("Submitted...");
  };
  render() {
    const { data, errors } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={data.username}
            onChange={this.handleChange}
            name="username"
            label="Username"
            type="text"
            error={errors.username}
          />
          <Input
            value={data.password}
            onChange={this.handleChange}
            name="password"
            label="Password"
            type="password"
            error={errors.password}
          />
          <ComboBox
            value={data.accountType}
            onChange={this.handleChange}
            name="accountType"
            label="Account Type"
            error={errors.accountType}
            options={["Listener", "Artist"]}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
