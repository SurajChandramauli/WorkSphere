import React, { useEffect } from "react";

import { connect } from "react-redux";
import { userSignup } from "../../redux/actions";
import { Form, Input, Button } from "antd";
import signupImg from "../../assets/images/signup.png";
import "./signInSignUp.css";
import {useNavigate} from 'react-router-dom';

const SignUp = (props) => {
  const history = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('loggedInUserId'))
      history('/home')
    },[props])

  const onFinish = (values) => {
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  const [name, setName] = React.useState('');
  const [employeeId, setEmployeeId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cnfpassword, setCnfPassword] = React.useState('');

  function handleName(e){
    setName(e.target.value)
  }
  function handleDeloitteEmail(e){
    setEmail(e.target.value)
  }
  function handleEmployeeId(e){
    setEmployeeId(e.target.value)
    
  }
  function handlePassword(e){
    setPassword(e.target.value)
  }
  function handleCnfPassword(e){
    setCnfPassword(e.target.value)
  }
  const data = {
    "name" : name,
    "deloitteEmail" : email,
    "deloitteEmpId" : employeeId,
    "password" : password
  };
  function handleSubmit() {
    // history('/home');

    // console.log(data)
   props.onSubmit(data)
  }

  const SignUpForm = (
    <Form
      name="form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <p className="login-form-title">Sign Up</p>
      <p>Create an account on Connekt</p>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input placeholder="Name" onChange={handleName}/>
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please enter your email!",
            type: "email",
          },
        ]}
      >
        <Input placeholder="Deloitte Email" onChange={handleDeloitteEmail} />
      </Form.Item>

      <Form.Item
        name="employeeId"
        rules={[{ required: true, message: "Please enter your employee id!" }]}
      >
        <Input placeholder="Employee Id" onChange={handleEmployeeId} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please enter your password!" }]}
      >
        <Input.Password placeholder="Password" onChange={handlePassword}/>
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="confirmPassword" onChange={handleCnfPassword}/>
      </Form.Item>
      <Form.Item>
        <Button type="success" htmlType="submit" className="form-button" onClick={handleSubmit} disabled={!name || !employeeId || !password || !cnfpassword || !email} >
          SIGN UP
        </Button>
      </Form.Item>
      <p>Already have an account? <a href="/" action="">
        <u>SignIn</u>
      </a></p>
    </Form>
  );

  return (
    <div className="page">
      <div className="box">
        <div className="illustration-wrapper">
          <img src={signupImg} alt="Login" />
        </div>
        {SignUpForm}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signedUpUserData: state.testMockApiDataSetup.signedUpUserData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (data) => dispatch(userSignup(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
