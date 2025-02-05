import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getTestMockData } from "../../redux/actions";
import { Form, Input, Button, Checkbox } from "antd";
import "./signInSignUp.css";
import loginImg from "../../assets/images/login.png";
import {useNavigate} from 'react-router-dom';
import { userLogin } from "../../redux/actions";

const LoginPage = (props) => {
  // useEffect(() => {
  //   props.getTestMockData();
  // }, []);
  const onFinish = (values) => {
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  const history = useNavigate();


  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit() {
    // history('/home');
    const data = {
      "deloitteEmail" : email,
      "password" : password
    };
   props.onSubmit(data)
  }

  useEffect(()=>{
  if(localStorage.getItem('loggedInUserId'))
    history('/home')
  },[props])

  function handleDeloitteEmail(e){
 
    setEmail(e.target.value)
  }

  function handlePassword(e){
    setPassword(e.target.value)
  }

  const loginForm = (
    <Form
      name="form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <img src={require("../../assets/images/logoconnekt2.png")} alt="" style={{padding:'40px 0px 20px'}}/>
      {/* <p className="login-form-title">Connekt</p> */}
      <p>Sign in with your Deloitte account</p>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please enter your Deloitte Email!" }]}
      >
        <Input placeholder="someone@deloitte.com" onChange={handleDeloitteEmail}/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please enter your password!" }]}
      >
        <Input.Password placeholder="Password" onChange={handlePassword}/>
      </Form.Item>

    

      <Form.Item>
        <Button type="success" htmlType="submit" className="form-button" onClick={handleSubmit}>
          SIGN IN
        </Button>
      </Form.Item>
      <p>New Here? <a href="/signUp" action="">
        <u>SignUp</u>
      </a></p>
      
    </Form>
  );

  return (
    <div className="page">
      <div className="box">
        <div className="illustration-wrapper">
          <img src={loginImg} alt="Login" />
        </div>
        {loginForm}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loggedInUserData: state.testMockApiDataSetup.loggedInUserData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (data) => dispatch(userLogin(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
