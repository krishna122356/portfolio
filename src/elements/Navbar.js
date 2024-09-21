import React from 'react';
import { Link } from 'react-router-dom';
import { CNavbar, CContainer, CButton } from '@coreui/react';

function Navbar() {
  return (
    <CNavbar colorScheme="light" className="bg-light">
      <CContainer fluid>
        <h1>My Website</h1>
        {/* Buttons to navigate to different routes */}
        <Link to="/krishna">
          <CButton color="primary" className="me-2">Go to Krishna's Page</CButton>
        </Link>
        <Link to="/sanjit">
          <CButton color="secondary">Go to Sanjit's Page</CButton>
        </Link>
      </CContainer>
    </CNavbar>
  );
}

export default Navbar;