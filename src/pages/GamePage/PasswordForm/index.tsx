import React, { useState } from 'react';
import { StyledPasswordFormContainer } from './StyledPasswordFormContainer.styled';

const PasswordForm = () => {
    const [modalClass, setModalClass] = useState('');
    const [isModalActive, setIsModalActive] = useState(false);

    const handleButtonClick = (buttonId: string) => {
        setModalClass(buttonId);
        setIsModalActive(true);
    };

    const handleModalContainerClick = () => {
        setModalClass('out');
        setIsModalActive(false);
    };

    return (
        <StyledPasswordFormContainer>
            <div id="modal-container" onClick={handleModalContainerClick} className={isModalActive ? modalClass : ''}>
                <div className="modal-background">
                    <div className="modal">
                        <h2>I'm a Modal</h2>
                        <h2>I'm a Modal</h2>
                        {/* Your modal content goes here */}
                        <p>Hear me roar.</p>
                        <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                            <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="content">
                <h1>Modal Animations</h1>
                <div className="buttons">
                    {/* Assuming you have buttons with the 'button' class */}
                    <div id="two" className="button" onClick={() => handleButtonClick('two')}>
                        Revealing
                    </div>
                </div>
            </div>
        </StyledPasswordFormContainer>
    );
};

export default PasswordForm;