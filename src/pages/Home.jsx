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
        <h1 className='text-danger ms-5'>All Video Cards</h1>
        <br /><br />
        <Link to={'/watchhistory'} style={{textDecoration:"none",fontSize:"25px",color:"red",}}className='ms-a'>Watch History</Link>

        <div className='container-fluid'>
          
          <Row>
            {/* add component selector */}

              <Col lg={1}>

                {/* share handle function to add component */}

                <Add  handleresponse={handleresponse}/>  

              </Col>

                {/* view component selector */}

              <Col lg={7}>

                <View  serverRes={serverRes}/>

              </Col>

                {/* add component selector */}

              <Col lg={4}>

                <Category serverRes={serverRes}/>

              </Col>





            
          </Row>
  
        </div>

    </>
  )
}

export default Home