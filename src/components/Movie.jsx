import * as React from 'react';
const Movie = (props) => {

    const { title, description, genres } = props.movie;


    return (
        <div className='movie'>
            <div className='movie-image'>
                <img src={`https://ui-avatars.com/api/?name=${title}&background=random`} alt='not found' />
            </div>
            <div className='movie-content'>
                <div>{title}</div>
                <div>{description}</div>
                <div>{genres}</div>
            </div>

        </div>
    );
}





export default Movie; 