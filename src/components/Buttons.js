import styled from 'styled-components';

const primaryColor = '#FF5757';
const hoverColor = '#FF4646';
const activeColor = '#FF0000';

const textOnPrimary = '#000000';
const textOnPrimaryInverted = '#ffffff';

const Button = styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Menlo", monospace;
    transition: background-color 0.2s linear, color 0.2s linear;

`

const PrimaryButton = styled(Button)`
    // CSS / SCSS goes in here
    background-color: ${primaryColor};
    border: none;
    color: ${textOnPrimary};

    &:hover {
        background-color: ${hoverColor};
        color: ${textOnPrimaryInverted};
    }

    &:focus {
        background-color: ${activeColor};
        color: ${textOnPrimaryInverted};
        outline: 2px solid ${activeColor};
        outline-offset: 1px;
    }

    &:active {
        background-color: ${activeColor};
        color: ${textOnPrimaryInverted};
    }
`

export default PrimaryButton;