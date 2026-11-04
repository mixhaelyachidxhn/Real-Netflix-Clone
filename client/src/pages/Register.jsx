import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import bannerImage from '../images/PoetryOn.TV Banner.png';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const emailRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', { email, username, password });
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div 
      className='register'
      style={{
        width: '100vw',
        height: '100vh',
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.8) 100%), url(${bannerImage}) no-repeat`,
        backgroundSize: 'cover',
        color: 'white'
      }}
    >
      <div className='top'>
        <div className='wrapper'>
          <Link to='/'>
            <img
              src={require('../images/PoetryOnTV Logo.png')}
              alt='PoetryON.tv Logo'
              className='logo'
              style={{ height: '120px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>
          <Link to='/login'>
            <button className='loginButton'>Sign In</button>
          </Link>
        </div>
      </div>
      <div className='container'>
        <h1>Decentralized Poetry, Films & Series.</h1>
        <h2>Watch anywhere. Connect across the network.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className='input'>
            <input type='email' placeholder='Email address' ref={emailRef} />
            <button className='registerButton' onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className='input'>
            <input
              type='username'
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='registerButton' onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
