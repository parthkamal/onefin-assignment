import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);

    const handleList = async ({ token }) => {
        const headers = {
            "Authorization": `Token ${token}`
        };

        try {
            const URL_STRING = 'https://demo.credy.in/api/v1/maya/movies/';
            const response = await axios.get(URL_STRING, { headers });
            setList(response.data.results);
        } catch (error) {
            // Handle errors here
        }
    };

    useEffect(() => {
        console.log('page reload hua');
        const token = localStorage.getItem('token');

        if (token) {
            handleList({ token });
        } else {
            navigate(-1);
        }
    }, []);

    return (
        <div>
            <h1>List of Movies</h1>
            {
                list.map((item, index) => (
                    <div key={index}>
                        <div>{item.title}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default Movies;
