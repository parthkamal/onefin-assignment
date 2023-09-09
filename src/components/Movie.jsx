import * as React from 'react';
import { useState } from 'react';
import MovieModal from './MovieModal';

const Movie = (props) => {

    const { title, description, genres } = props.movie;
    const [modalOpen, setModalOpen] = useState(false);
    const theme = props.theme;

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }


    function getSubstringByWords(string, numWords) {

        const words = string.split(' ');
        numWords = Math.max(0, Math.min(numWords, words.length));
        const selectedWords = words.slice(0, numWords);
        const result = selectedWords.join(' ');
        return result;

    }

    return (
        <div className='movie'>
            <div className='movie-image'>
                <img src={`https://ui-avatars.com/api/?name=${title}&background=random`} alt='not found' />
            </div>
            <div className='movie-content'>
                <div className='movie-content-top'>
                    <div className='movie-title'>{title}</div>
                    <div className='movie-description'>{getSubstringByWords(description, 15)}</div>
                </div>

                <div className='movie-content-bot'>
                    <div className='movie-content-genre'><div><img className='genre-img' src='/genre.png' />
                    </div>
                        <div>{genres}</div>
                    </div>
                    <div className='know-more-btn' onClick={openModal}>know more</div>
                </div>

            </div>

            <MovieModal isOpen={modalOpen} closeModal={closeModal} title={title} theme={theme} description={description} genres={genres} src={`https://ui-avatars.com/api/?name=${title}&background=random`} />
        </div>
    );
}

export default Movie;
