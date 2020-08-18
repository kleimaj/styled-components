import React from 'react';
import { PrimaryButton } from './components/Buttons';
import { SignUpModal } from './components/Modals';

function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'column'
    }}>
      <h1>My Styled Components</h1>
     <PrimaryButton>Click Me</PrimaryButton>
     <SignUpModal />
    </div>
  );
}

export default App;
