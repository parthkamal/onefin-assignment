import '../App.css';

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);
    const [errors, setErrors] = useState({});
    const [theme, setTheme] = useState("dark-theme");
    

    const toggleTheme =() =>{
        setTheme((oldTheme) => {
            if(oldTheme === "dark-theme"){
                return "light-theme";
            }else {
                return "dark-theme";
            }
        });
    }

    const validateForm = () => {
        const errors = {};
        if (!username) {
            errors.username = 'username is required';
        } else if (username.length < 4) {
            errors.username = 'username : atleast four characters'
        }
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleLogin = async () => {

        if (validateForm()) {
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
        }


    };


    const handleBlur = (e) => {
        const fieldName = e.target.name;
        if (errors[fieldName]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [fieldName]: '',
            }));
        }

    };

    const handleFocus = (e) => {

        setErrors((prevErrors) => ({}))
    };








    return (
        <div className={`login-main ${theme}`}>
        <button className='toggle-btn' onClick={toggleTheme}>toggle</button>
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
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                        <label>Username</label>
                    </div>
                    {(errors.username) ?
                        <div className='form-message'>*{errors.username}</div> : <></>}
                    <div className='input-box'>
                        <span className='icon'>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                        <label>Password</label>
                    </div>
                    {(errors.password) ? <div className='form-message'>*{errors.password}</div> : <></>}
                    <button className='login-btn' onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>



    );
}

export default Login;
