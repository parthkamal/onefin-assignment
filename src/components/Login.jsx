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

            console.log({ username, password });

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
            alert('sorry you are not allowed bro');
        }
    };

    return (
        <div>
            <div>
                <h2>onefin assignment</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;
