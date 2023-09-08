import { Modal } from '@mui/material';
import React from 'react';
import '../App.css';



const MovieModal = ({ isOpen, closeModal, title, description, genres, src }) => {

    
    return (
        <div>
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
                            <div>{genres}</div>
                            <div>
                                <button id='modalBtn' onClick={closeModal}>Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </Modal>
        </div>



    );
}

export default MovieModal;
