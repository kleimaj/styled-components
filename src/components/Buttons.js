import styled from 'styled-components';

const Button = styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Menlo", monospace;
`

const PrimaryButton = styled(Button)`
    // CSS / SCSS goes in here
    background-color: red;
    border: none;
    color: white;
`

export default PrimaryButton;