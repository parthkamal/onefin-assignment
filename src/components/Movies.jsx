import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';

import Movie from './Movie';
import '../App.css';



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
        };

        try {

            const MOVIES_API = 'https://demo.credy.in/api/v1/maya/movies/';
            const response = await axios.get(MOVIES_API, { headers, params });
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

            <div className='movie-grid'>
                {
                    list.map((item, index) => (
                        <Movie movie={item} key={index} />

                    ))
                }
            </div>

            <Stack spacing={10}>
                <Pagination
                    count={4547}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"

                    className='pagination'
                    size="large"
                    renderItem=
                    {(item) =>
                        <PaginationItem {...item} className='pagination-item' />
                    }
                />
            </Stack>
        </div>
    );
};

export default Movies;
