import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://qapp-bank-admin-auth.eu-west-1.elasticbeanstalk.com/api/v1/auth";
axios.interceptors.request.use(function (config) {
const token = localStorage.getItem("auth_tag_token");
config.headers.Authorization = token ? `Bearer ${token}` : "";
config.headers["Bank-ID"] = "f4934971-0352-4bc2-8596-e6ea877cbdaa";
config.headers["Platform"] = "WEB";
  return config;
});

const Login = () => {

React.useEffect(() => {
    const formData = {
        email: "balogun.abbey28@gmail.com",
        password: "12345"
    };
   axios.post('/login', formData);
});
  return (
    <div>Lin</div>
  )
}

export default Login;