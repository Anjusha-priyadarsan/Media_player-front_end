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
    <>

    <Row>

      <Col></Col>

      <Col lg={6}>
        <h1>Welcome Videoo.com</h1>
        <p style={{textAlign:'justify'}}>Where user can use their favourite videos. User can upload any youtube videos by copy and paste their url into videoo.com will allow to add and remove their uploaded videos. And also arrange them in different categories by drag and drop. It is free. Tyr it now!</p>

        <button className='btn btn-danger' onClick={handlenavigate}>Click Here To Know More</button>
      
      
      
      
      </Col>

      <Col lg={5}>

        <img className='img-fluid' src="https://helios-i.mashable.com/imagery/articles/03rcHPGUToyz24eL9m24e8Q/hero-image.fill.size_1248x702.v1623370834.jpg" alt="No Image" style={{borderRadius:'50%'}} />



      </Col>

    </Row>
       


    </>
  )
}

export default Landingpage