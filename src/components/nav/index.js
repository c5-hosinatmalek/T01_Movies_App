import React, { useState,useEffect,useContext } from 'react';
import './style.css'
import {Link,useNavigate} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdFavorite } from 'react-icons/md';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { usecount } from '../../App';
const NAVBAR=()=> {
  const {countFav,setCountFav}=useContext(usecount)
  const navigate=useNavigate()
  const mov=useSelector((state)=>{
    return{
        movs:state.allfavorite.numfav
    }
})

// JSON.parse(localStorage.getItem("fav")).length
//   const [numFav,setNumFav]=useState(mov.movs)
// useEffect(()=>{
 
// },[numFav])
  return (
    <Navbar className='navv' >
      <Container>
        <Navbar.Brand onClick={()=>{navigate("/")}} className='logo_page' href="#home">FREE MOVIES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/")}}   >HOME</Nav.Link>
           
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className='mm' onClick={()=>{navigate("/my_favorite")}}  ><MdFavorite/><p className='numfav' >{countFav}</p></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NAVBAR;