import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Upload } from 'react-feather';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>

            <Navbar className="bg-danger">
                <Container className="bg-danger">
                    <Navbar.Brand className="bg-danger" >
                        <span className='text-light bg-danger '>


                            {/* React feather icon */}

                            <Link to={'/'} style={{textDecoration:'none',color:'white'}} className="bg-danger"> 

                                <Upload className="bg-danger"/> <span className="bg-danger ">Videoo.com</span>
    
                            </Link>
                        </span>
                    </Navbar.Brand>
                </Container>
            </Navbar>



        </div>
    )
}

export default Header