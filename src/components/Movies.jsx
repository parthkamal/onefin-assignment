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
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState(list);
    const [typingTimeout, setTypingTimeout] = useState(null);
    const [isPopulated, setPopulated] = useState(false);
    const [theme, setTheme] = useState("dark-theme");


    const toggleTheme = () => {
        setTheme((oldTheme) => {
            if (oldTheme === "dark-theme") {
                return "light-theme";
            } else {
                return "dark-theme";
            }
        });
    }

    const handleSearch = (e) => {

        clearTimeout(typingTimeout);

        setQuery(e.target.value);


        const searchQuery = e.target.value;

        if (searchQuery.trim() === '') {
            setFilteredItems(list);
        } else {
            if (searchQuery.length >= 3) {
                const timeout = setTimeout(() => {
                    const filtered = list.filter((item) =>
                    (item.title.toLowerCase().includes(searchQuery.toLowerCase())
                        ||
                        item.description.toLowerCase().includes(searchQuery.toLowerCase())
                    ))
                    setFilteredItems(filtered);
                }, 250);
                setTypingTimeout(timeout);
            }
        }



    };

    const handleList = async ({ currentPage }) => {

        const token = localStorage.getItem('token');

        if (token) {

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


                if (response.data.results.length > 0) {
                    setFilteredItems(response.data.results);
                    setPopulated(true)
                } else {
                    setPopulated(false)
                }


            } catch (error) {
                console.error(error);
                setPopulated(false);
            }

        } else {
            navigate(-1);
        }


    };

    const handlePageChange = (event, page) => {
        setPopulated(false);
        setCurrentPage((prev) => page);
    }

    useEffect(() => {
        handleList({ currentPage });
    }, [currentPage]);

    return (
        <div className={`movie-list ${theme}`}>
            <button className='toggle-btn' onClick={toggleTheme}>toggle</button>
            <h1 className='movie-heading'>List of Movies</h1>
            <input
                id="search-input"
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleSearch}

                className='search-bar'
            />


            {isPopulated ? (
                <div className='movie-grid'>
                    {
                        filteredItems.map((item, index) => (
                            <Movie movie={item} key={index} theme={theme} />

                        ))
                    }
                </div>
            ) : (
                <div>
                    <div>{'ouch! click the button to refresh :)'}</div>
                    <div className='refresh-button' onClick={(e) => handleList({ currentPage })}>refresh</div>
                </div>
            )}



            <Stack spacing={10} className='pagination-main' >
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
