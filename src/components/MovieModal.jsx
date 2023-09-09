import { Modal } from '@mui/material';
import React from 'react';
import '../App.css';



const MovieModal = ({ isOpen, closeModal, title, description, genres, theme }) => {

    
    return (
    
            <Modal
                open={isOpen}
                onRequestClose={closeModal}
                className='modal-main'
            >
                <div className="modal">

                    <div className='modal-image'>
                        <img src={`https://ui-avatars.com/api/?name=${title}&background=random`} alt='not found' />
                    </div>
                    <div className='modal-content'>
                        <div className='modal-content-top'>
                            <div className='modal-title'><strong>{title}</strong></div>
                            <div className='modal-description'>{description}</div>
                        </div>

                        <div className='modal-content-bot'>
                            <div className='modal-content-genre'>{genres}</div>
                            <div  className={`modal-content-bot-btn ${theme}`} onClick={closeModal}>Close</div>
                        </div>

                    </div>
                </div>
            </Modal>
        



    );
}

export default MovieModal;
