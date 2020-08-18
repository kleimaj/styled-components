import React from 'react';
import styled from 'styled';
import { Illustrations } from '../assets';
import { PrimaryButton } from './Buttons';

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
    background-color: #ffffff;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 2px;
`

const SignUpHeader = styled.h3`
    font-size: 2rem;
`

const SignUpText = styled.p`
    font-size: 1rem;
    max-width: 70%;
    text-align: center;
`

export const SignUpModal = () => {
    return (
        <ModalWrapper>
            <img 
                src={Illustrations.SignUp} 
                alt="Sign up for an account" 
                aria-hidden="true" 
            />
            <SignUpHeader>Sign Up!</SignUpHeader>
            <SignUpText>Sign up today to get access to cool things!</SignUpText>
            <PrimaryButton>Submit</PrimaryButton>
        </ModalWrapper>
    )
}