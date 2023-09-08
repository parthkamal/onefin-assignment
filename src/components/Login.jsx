
import '../App.css';

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);

    const handleLogin = async () => {
        try {


            const response = await axios.post('https://demo.credy.in/api/v1/usermodule/login/', {
                username: username,
                password: password,
            });

            const { token: acces_token } = response.data.data;
            localStorage.setItem('token', acces_token);

            setToken(acces_token);

            setUsername('');
            setPassword('');

            navigate('/movies');

        } catch (error) {
            console.error('Login failed:', error);
        }
    };




    return (

        <div className='login-box'>
            <div>
                <h2>Login</h2>
                <div className='input-box'>
                    <span className='icon'>
                        <ion-icon name="person-outline"></ion-icon>
                    </span>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label>Username</label>
                </div>
                <div className='input-box'>
                    <span className='icon'>
                        <ion-icon name="lock-closed-outline"></ion-icon>
                    </span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                        required
                    />
                    <label>Password</label>
                </div>

                <button onClick={handleLogin}>Login</button>
            </div>
        </div>

    );
}

export default Login;
