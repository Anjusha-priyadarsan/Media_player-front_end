import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from './Add'
import View from './View'
import Category from './Category'
import { Link } from 'react-router-dom'



function Home() {
// ceteralized state for sharing data b/w add and view [both are siblings of parent component home ]

const[serverRes,setserverRes]=useState({})

const handleresponse=(res)=>{
  setserverRes(res)

}

  return (
    <>
                {/* add component selector */}
                                {/* share handle function to add component */}


      
        <Add  handleresponse={handleresponse}/> 
          
          
  
                 
        
<br />
        <Row>
          <Col lg={6}>
            <h2 className='text-danger ' style={{marginLeft:"20px"}}>All Videos </h2>
  
          </Col>
          <Col lg={6}>

          <Link to={'/watchhistory'} style={{textDecoration:"none",fontSize:"20px",color:"red",marginLeft:"380PX",fontWeight:"bold"}}className='ms-a'>Watch History</Link>



  
          </Col>  
        </Row>
        
        <div className='container-fluid'>
          
          <Row>


                {/* view component selector */}

              <Col lg={6}>

                <View  serverRes={serverRes}/>

              </Col>

                {/* add component selector */}

              <Col lg={6}>
                <br />
                

                <Category serverRes={serverRes}/>

              </Col>





            
          </Row>
  
        </div>

    </>
  )
}

export default Home