import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../App.css';
import { PaginationItem } from '@mui/material';



const Movies = () => {

    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const handleList = async ({ token, currentPage }) => {

        const headers = {
            "Authorization": `Token ${token}`
        };

        const params = {
            page: currentPage
        }

        try {

            const URL_STRING = 'https://demo.credy.in/api/v1/maya/movies/';

            const response = await axios.get(URL_STRING, { headers, params });
            setList(response.data.results);

        } catch (error) {
            console.log(error);
        }
    };


    const handlePageChange = (event, page) => {
        setCurrentPage((prev) => page); //good practice
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {

            handleList({ token, currentPage });
        } else {
            navigate(-1);
        }
    }, [currentPage]);



    return (
        <div className='movie-list'>
            <h1>List of Movies</h1>
            {
                list.map((item, index) => (
                    <div key={index}>
                        <div>{item.title}</div>
                    </div>
                ))
            }
            <Stack spacing={10}>
                <Pagination
                    count={4547}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="secondary"

                    className='pagination'
                    size="large"
                    renderItem=
                    {(item) =>
                        <PaginationItem {...item} className='item' />
                    }
                />
            </Stack>

        </div>
    );
};

export default Movies;
