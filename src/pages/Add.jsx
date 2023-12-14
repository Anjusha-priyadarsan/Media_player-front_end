import React from 'react'
import { PlusCircle } from 'react-feather'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import  Form  from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { addVideo } from '../service/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


function Add({handleresponse}) {

  const [uploaddata,setuploaddata]=useState({
    id:"",caption:"",thumbnail:"",url:""


  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setInput=(e)=>{

    const{name,value}=e.target

    // spread operation(...)

    setuploaddata({...uploaddata,[name]:value})


    // setuploaddata(e.target.value)

  }
  console.log(uploaddata);


  // extract embedded url from youtube original url

  const extractUrl=(e)=>{

    let youtubeUrl=e.target.value

    if(youtubeUrl.includes("v="))
    {
        let index=youtubeUrl.indexOf("v=")
        console.log(index);

        let videourl=youtubeUrl.substring(index+2,index+13)
        console.log(videourl);


        let videodata=uploaddata
        videodata.url=`https://www.youtube.com/embed/${videourl}`
        setuploaddata(videodata)

    }

  }
  // console.log(uploaddata);



  const handleAdd=async()=>
  {
    // destructure the state object
    const {id,caption,thumbnail,url}=uploaddata

    if(!id || !caption || !thumbnail || !url)
    {
      toast.error("please fill the form completely ")
    }
    else
    {
        // api call
        const response=await addVideo(uploaddata)
        console.log(response);

        if(response.status>=200 && response.status<300)
        {
            // console.log(response.data);

            handleresponse(response.data)
            
            setShow(false);
            toast.success("new video uploaded successfully",{
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })
        }
        else
        {
            toast.warning('please provide a unique id!!!')
        }


    }


  }




  return (
    <>

    <div onClick={handleShow} className='btn'>

        <PlusCircle color='orange' size={90}/>
    </div>

    {/* modal */}


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            {/* id */}
          <FloatingLabel  className='mb-3' controlId="floatingPassword" label="id">
          <Form.Control onChange={setInput} type="text" placeholder="Uploading video id"  name='id' />
          </FloatingLabel>

          {/* caption */}

          <FloatingLabel  className='mb-3' controlId="floatingPassword" label="Uploading Video caption">
          <Form.Control onChange={setInput} type="text" placeholder=" Video caption" name='caption'  />
          </FloatingLabel>

        {/* video cover img url */}

          <FloatingLabel  className='mb-3' controlId="floatingimage" label="video cover image url">
          <Form.Control onChange={setInput} type="text" placeholder="video cover image url"  name='thumbnail' />
          </FloatingLabel>

          {/* Uploading video link */}

          <FloatingLabel className='mb-3' controlId="floatinglink" label="Uploading video link">
          <Form.Control onChange={extractUrl} type="text" placeholder="video Link" name='url'  />
          </FloatingLabel>


          


          </Form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />


    </>
  )
}

export default Add