import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getHistory } from '../service/allapi';


function Watchhistory() {

  const[history,sethistory]=useState([])

useEffect(() => {
  
getWatchhistory()
 
}, [])




const getWatchhistory=async()=>{
  // api call
  // {data}--destructure response
  const {data}=await getHistory()
  sethistory(data)
  
}

console.log(history);

  return (
    <>

    <h5 style={{color:"red",fontWeight:"BOLD"}}>Watch History</h5> <br />

    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th> Name</th>
          <th>URL</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {
            history?.map((item,index)=>(

              <tr>
              <td>{index+1}</td>
              <td>{item?.categoryName}</td>
              <td>{item?.url}</td>
              <td>{item?.date}</td>
             </tr>

            ))





        }
        
      </tbody>
    </Table>
    
    </div>


    </>
  )
}

export default Watchhistory