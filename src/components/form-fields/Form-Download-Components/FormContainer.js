import React from 'react';
//import './FormContainer.css';
const FormContainer = ({ children }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' , gap:'1rem' }}>
      {children}
    </div>
  );
};

export default FormContainer;

// style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }}