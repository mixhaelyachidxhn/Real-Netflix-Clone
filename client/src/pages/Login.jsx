import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import bannerImage from '../../images/PoetryOn.TV Banner.png';
import logoImage from '../../images/PoetryOnTV Logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/login', { email, password });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div 
      className='login'
      style={{
        width: '100vw',
        height: '100vh',
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.8) 100%), url("${bannerImage}") no-repeat center center`,
        backgroundSize: 'cover',
        color: 'white'
      }}
    >
      <div className='top'>
        <div className='wrapper'>
          <Link to='/'>
            <img
              src={logoImage}
              alt='PoetryON.tv Logo'
              className='logo'
              style={{ height: '360px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>
        </div>
      </div>
      <div className='container'>
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <input
            type='email'
            placeholder='Email or phone number'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className='loginButton'>
            Sign In
          </button>
          <span>
            New to PoetryON.tv? <Link to='/register' className='signUpLink'>Sign up now.</Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;
