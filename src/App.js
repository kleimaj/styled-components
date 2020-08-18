import React from 'react';
import PrimaryButton from './components/Buttons';

function App() {
  return (
    <div>
      <h1>My Styled Components</h1>
     <PrimaryButton modifiers={["large","warning"]}>Click Me</PrimaryButton>
    </div>
  );
}

export default App;
