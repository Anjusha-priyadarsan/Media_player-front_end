import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {

    
//useNavigate()--this hook is used  to redirect from one page to another page
 const navigate=useNavigate()

 const  handlenavigate=()=>{

      navigate('/home')

}

  return (
    <div style={{backgroundColor:"black"}}>

    <Row>

      

      <Col lg={6} style={{color:"gray",marginTop:"50px"}}>
        <h1  style={{color:"white"}}>Welcome Videoo.com</h1>
        <p style={{textAlign:'justify',marginTop:"30px"}}>Where user can use their favourite videos. User can upload any youtube videos by copy and paste their url into videoo.com will allow to add and remove their uploaded videos. And also arrange them in different categories by drag and drop. It is free. Tyr it now!</p>

        <button style={{marginTop:"20px"}} className='btn btn-danger' onClick={handlenavigate}>Get Started </button>
      
      
      
      
      </Col>

      <Col lg={5}>

        <img className='img-fluid' src="https://media.istockphoto.com/id/1330058997/photo/music-listening-concept-vintage-cassette-tape-audio-player-and-headphones.jpg?s=612x612&w=0&k=20&c=FONqiUOPeuuzYcWTAYXIAH3TYkPdibT8iZDmlxJEQ0s=" alt="No Image" style={{borderRadius:'40px',marginTop:'50px',marginLeft:"30px"}} height={'500px'} width={'500px'}/>



      </Col>

    </Row>
       


    </div>
  )
}

export default Landingpage