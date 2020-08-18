import React, { useState } from 'react';
import { PrimaryButton } from './components/Buttons';
import { SignUpModal } from './components/Modals';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'column'
    }}>
     <PrimaryButton
        onClick={() => setShowModal(!showModal)} 
     >
       Click Me
       </PrimaryButton>
     <SignUpModal 
        showModal={showModal} 
        setShowModal={setShowModal} 
     />
    </div>
  );
}

export default App;
