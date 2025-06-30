import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import p1 from '../../images/p1.jpg'
import p2 from '../../images/p2.jpg'
import p3 from '../../images/p3.jpg'
import p4 from '../../images/p4.jpg'
import p5 from '../../images/p5.webp'
import p7 from '../../images/p7.jpg'
import AllPropertiesCards from '../user/AllPropertiesCards';

const Home = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
   };
   return (
      <>
         <Navbar fixed="top" expand="lg" className="bg-body-tertiary" style={{background:"rgba(255,255,255,0.1)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"5px",padding:"10px 10px",zIndex:1000}}>
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
                     <Link to={'/'}>Home</Link>
                     <Link to={'/login'}>Login</Link>
                     <Link to={'/register'}>Register</Link>
                  </Nav>

               </Navbar.Collapse>
            </Container>
         </Navbar>


         <div className='home-body' style={{ marginTop: "80px" }}> {/* pushes content below fixed navbar */}
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <img
   
            src={p1}
            alt="First slide"
            style={{
              height: "calc(100vh - 80px)",
              objectFit: "cover",
              width: "100%",
              filter: "brightness(65%)"
            }}
          />
          <div style={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "25px 50px",
            borderRadius: "12px",
            zIndex: 1000, // ensures it shows above image
            width: "80%",
            maxWidth: "700px"
          }}>
            <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", marginBottom: "10px" }}>Find Your Dream House</h1>
            <p style={{ fontSize: "1.2rem" }}>Verified listings. Trusted owners. Book confidently.</p>
          </div>
        </Carousel.Item>

        

      <Carousel.Item>
         <img
   
            src={p7}
            alt="Second slide"
            style={{
              height: "calc(100vh - 80px)",
              objectFit: "cover",
              width: "100%",
              filter: "brightness(65%)"
            }}
          />
          <div style={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "25px 50px",
            borderRadius: "12px",
            zIndex: 1000, // ensures it shows above image
            width: "80%",
            maxWidth: "700px"
          }}>
            <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", marginBottom: "10px" }}>Safe & Secure Bookings</h1>
            <p style={{ fontSize: "1.2rem" }}>Direct owner connections and verified renters..</p>
          </div>
       
      </Carousel.Item>

      <Carousel.Item>
         <img
   
            src={p3}
            alt="Third slide"
            style={{
              height: "calc(100vh - 80px)",
              objectFit: "cover",
              width: "100%",
              filter: "brightness(65%)"
            }}
          />
          <div style={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "25px 50px",
            borderRadius: "12px",
            zIndex: 1000, // ensures it shows above image
            width: "80%",
            maxWidth: "700px"
          }}>
            <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", marginBottom: "10px" }}>HouseHunt-Your Rental Partner</h1>
            <p style={{ fontSize: "1.2rem" }}>Smart,quick,and reliable house rental experience..</p>
          </div>
        
      </Carousel.Item>

       <Carousel.Item>
         <img
   
            src={p5}
            alt="Fourth slide"
            style={{
              height: "calc(100vh - 80px)",
              objectFit: "cover",
              width: "100%",
              filter: "brightness(65%)"
            }}
          />
          <div style={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "25px 50px",
            borderRadius: "12px",
            zIndex: 1000, // ensures it shows above image
            width: "80%",
            maxWidth: "700px"
          }}>
            <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", marginBottom: "10px" }}>Browse properties by location</h1>
            <p style={{ fontSize: "1.2rem" }}>Smart filters. Easy navigation . Find what suits you best</p>
          </div>
       
      </Carousel.Item>
    </Carousel>
         </div>

   

         <div className='property-content'>
            <div className='text-center'>
               <h1 className='m-1 p-5'>All Properties that may you look for</h1>
               <p style={{fontSize: 15, fontWeight: 800}}>Want to post your Property? <Link to={'/register'}><Button variant='outline-info'>Register as Owner</Button></Link></p>
            </div>

            <Container>
               <AllPropertiesCards />
            </Container>
         </div>
      </>
   )
}

export default Home
