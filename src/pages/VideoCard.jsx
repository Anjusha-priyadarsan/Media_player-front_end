import React from 'react'
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteVideo } from '../service/allapi';
import { v4 as uuidv4 } from 'uuid';




// {card} to destructure object

function VideoCard({card, handleDeleteStatus, insideCategory}) {  

  const [show, setShow] = useState(false);

  const handleClose = () =>setShow(false);


  // for to play video when click the img
  // set this  as an async function to store video details at backend whenever it is played
  const handleShow = async() =>{

     setShow(true);
    
    // to generate id automatically

    const uid=uuidv4()
    console.log(uid);

    // to generate system time and data

    let cardTime=new Date()
    console.log(cardTime);

    // destructure details from card(props)

    const{caption,url}=card

    if(uid!="",caption!="",url!="",cardTime!="")
    {
      // create a body and pass data as object to backend
      const body={
        id:uid,categoryName:caption,url,date:cardTime
      }
      // api call for post data to watch history

      const res= await addHistory(body)
      console.log(res);

    }

    }

  // video remove

  const removeItem=async(id)=>{
    // api call
    const response=await deleteVideo(id)
    console.log(response);

    // check deleted or not

    if(response.status >=200 && response.status<300 )
    {
      handleDeleteStatus(true)
    }
  }


    const dragStarted=(e,id)=>
    {
      console.log("drag started and source card id:"+id);
      e.dataTransfer.setData("cardId",id)

      
    }


  return (
    <>

      <div>
        {/*bootstrap card */}
        <Card className='shadow' draggable onDragStart={e=>dragStarted(e,card?.id)} >
          <Card.Img variant="top" src={card?.thumbnail} height={'200px'} onClick={handleShow} />
          <Card.Body style={{backgroundColor:"black"}}>
            <Card.Title>
              <span style={{color:"white"}}>{card?.caption}</span>
              <span>
                {/* react feather icon */}
                
              {
                // to remove trash icon in videocard inside the category
                insideCategory?"":
                <Trash2 style={{ color: 'red', float: 'right' }} onClick={()=>removeItem(card?.id)} />

              }
              </span>
            </Card.Title>

          </Card.Body>
        </Card>

        {/* modal - display when click the video img */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{card?.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <iframe width='100%' height='400px' src={`${card?.url}?autoplay=1`} title="Neela Nilave - Video Song | RDX | Kapil Kapilan | Sam CS | Shane Nigam,Antony Varghese,Neeraj Madhav" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Modal.Body>
          
        </Modal>

      </div>

    </>
  )
}

export default VideoCard