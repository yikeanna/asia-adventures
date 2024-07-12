import React, { useState } from 'react';
import Auth from '../../components/Auth/Auth';
import './Login.css';

const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Add your login logic here
    // };

    return (
        <div className='container'>
            <Auth />
        </div>
    );
};

export default Login;