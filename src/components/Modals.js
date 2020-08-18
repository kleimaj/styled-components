import React from 'react';
import styled from 'styled-components';
import { Illustrations, CloseIcon } from '../assets';
import { PrimaryButton } from './Buttons';
import { useSpring, animated } from 'react-spring';

const ModalWrapper = styled(animated.div)`
    width: 800px;
    height: 550px;
    box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
    background-color: #ffffff;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 2px;
    font-family: 'Melo', monospace;
`

const SignUpHeader = styled.h3`
    font-size: 2rem;
    margin-bottom: 0;
`

const SignUpText = styled.p`
    font-size: 1rem;
    max-width: 70%;
    text-align: center;
`

const CloseModalButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    right: 40px;
    top: 40px;
    width: 24px;
    height: 24px;
    padding: 0;
`


export const SignUpModal = (props) => {
    const animation = useSpring({
        opacity: props.showModal ? 1 : 0,
        transform: props.showModal ? `translateY(0)` : `translateY(-200%)`
    });
    return (
        // <animated.div style={animation}>
            <ModalWrapper style={animation}>
                <img 
                    src={Illustrations.SignUp} 
                    alt="Sign up for an account" 
                    aria-hidden="true" 
                />
                <SignUpHeader>Sign Up!</SignUpHeader>
                <SignUpText>Sign up today to get access to cool things!</SignUpText>
                <PrimaryButton>Submit</PrimaryButton>
                <CloseModalButton
                    aria-label="Close modal"
                    onClick={() => props.setShowModal(false)}
                >
                    <CloseIcon/>
                </CloseModalButton>
            </ModalWrapper>
    )
}