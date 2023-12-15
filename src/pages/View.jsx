import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideo } from '../service/allapi'



function View({serverRes}) {

  // to store API Response

  const[allVideos,setallVideos]=useState([])    // api call  response in the form of array.so. create an empty array of usestate
  
  // create a state to know status of deleted video
  // consider initial state is false
  const[deleteStatus,setdeleteStatus]=useState(false)    
  
  

  useEffect(() => {

    // call getvideose()
    getallVideos()

  }, [serverRes,deleteStatus])

// create a function

const getallVideos=async()=>{

 const response=await getVideo()
//  console.log(response.data);
setallVideos(response.data)

}
console.log(allVideos);

// function to get delete response

const handleDeleteStatus=(res)=>{

  setdeleteStatus(res)

}
   

  return (
    <>

    <div className='border p-3 rounded'>

            <Row>

              {/* to multiply video cards using map function   */}

               {

                allVideos.map(video=>(

                  <Col className='p-1 ' sm={6} md={6} >

                   <VideoCard card={video} handleDeleteStatus={handleDeleteStatus}/>
                      
                  
                  </Col>


                ))
                  

                }
  
               
            </Row>




    </div>




    </>
  )
}

export default View