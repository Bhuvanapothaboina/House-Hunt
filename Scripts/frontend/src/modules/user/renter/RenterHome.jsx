import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import { UserContext } from '../../../App';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AllPropertiesCards from '../AllPropertiesCards';
import AllProperty from './AllProperties';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const RenterHome = () => {
  const user = useContext(UserContext)
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!user) {
    return null
  }

  const handleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  return (
    <div>
       
       <Navbar  expand="lg" className="bg-body-tertiary">
            <Container fluid>
               <Navbar.Brand style={{fontFamily:"'Poppins',sans-serif",fontSize:"34px",fontWeight:"600",color:"#3f8efc",letterSpacing:"1px"}}>House<span style={{color:"#fca311"}}>Hunt</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Nav>
              <h5 className='mx-3'>Hi {user.userData.name}</h5>
              <Link onClick={handleLogOut} to={'/'}>Log Out</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="tabs"
                textColor="primary"
                indicatorColor="primary"
                sx={{
                  backgroundColor: "#f8f9fa",
                  borderRadius: 1,
                  paddingX: 2
                }}
>
            <Tab label="All Properties" {...a11yProps(0)} />
            <Tab label="Booking History"
              {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Container>
            <AllPropertiesCards loggedIn={user.userLoggedIn} />
          </Container>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AllProperty/>
        </CustomTabPanel>
      </Box>
    </div>
  )
}

export default RenterHome

