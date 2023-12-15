import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAllCategory, getVideos, updateCategory } from '../service/allapi';
import { Trash2 } from 'react-feather';
import VideoCard from './VideoCard'











function Category({}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //( state for add category) 

  const [categoryItem, setcategoryItem] = useState({
    id: "", name: "", allVideos: []
  })

  // create state to store  api response to view all category

  const [allCategory, setallCategory] = useState([])

  const[deleteStatus,setdeleteStatus]=useState(false)   

// state create to store server response for show added data without refresh 
 

  useEffect(() => {

    getCategoryList()


  }, [deleteStatus])


  const addcategoryForm = (e) => {

    const { name, value } = e.target
    setcategoryItem({ ...categoryItem, [name]: value })
  }
  console.log(categoryItem);


  const handleAddCategory = async (e) => {
    // to prevent aoutomatic refreshment of page
    e.preventDefault()
    const { id, name } = categoryItem
    if (!id || !name) {
      toast.error("please fill the form completely ")

    }
    else {
      // api call
      const response = await addCategory(categoryItem)
      console.log(response);

      if (response.status >= 200 && response.status < 300) {
        // setserverRes(response.data)
        setShow(false);
        toast.success("new category created successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
        // to show categor at thr time category added
        getCategoryList()
      }
      else {
        toast.warning('please provide a unique id!!!')

      }


    }
  }

  const getCategoryList = async () => {
    // api call for get category
    const res = await getAllCategory()
    console.log(res);
    setallCategory(res.data)
  }
  console.log(allCategory);


  // function to get delete response

  const handleDeleteStatus=(res)=>{

  setdeleteStatus(res)

}


  // category remove

  const removeCategory=async(id)=>{
    // api call
    const response=await deleteCategory(id)
    console.log(response);

    // check deleted or not

    if(response.status >=200 && response.status<300 )
    {
      handleDeleteStatus(true)
    }
  }


  const dragOver=(e)=>{

    e.preventDefault()
    console.log("dragging over the category board");

  }

  const dropped=async(e,categoryId)=>
  {
    console.log("category Id:",categoryId);

    let sourceCardId=e.dataTransfer.getData("cardId")
    console.log("sourcecardId",sourceCardId);

    // logic to implement adding card in the given category

    const{data}=await getVideos(sourceCardId)
    console.log('source video data', data);

    // droped category details

    let selectedCategory=allCategory.find(item=>item.id==categoryId)

    console.log("target category details",selectedCategory);

    // to push drop data in to array

    selectedCategory.allVideos.push(data)


    // update drop data in allvideos array

    await updateCategory(categoryId,selectedCategory )

    getCategoryList()

  
  }





  return (
    <>

      {/* d-grid----to show btn in large size */}
      <div className='d-grid'>

        <div className='btn btn-danger m-2' onClick={handleShow}>
          Add Category</div>


      </div>
      <br />

      {


        allCategory.map(item => (

          <div  droppable onDragOver={e=>dragOver(e)} onDrop={e=>dropped(e,item?.id)}>
            <div className='d-flex justify-content-between border rounded mt-3 p-2'>
              <h4 style={{color:"white"}}>{item?.name}</h4>
              <span><Trash2 color='red' onClick={()=>removeCategory(item?.id)}/></span>

              <br />
              <br />
              <br /><br />

            <Row>

              {
                item?.allVideos.map((card)=>(
                  <Col sm={12} lg={6}>

                    <br /><br />

                  <VideoCard card={card}  insideCategory={true}/>
                  
                  </Col>

                ))


              }

            </Row>

            </div>
          </div>



        ))



      }



      {/* modal */}


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='bg-danger' closeButton >
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>

          <Form>

            <FloatingLabel className='mb-3' controlId="floatingid" label="id">
              <Form.Control name='id' type="text" onChange={addcategoryForm} placeholder="Category id" />
            </FloatingLabel>


            <FloatingLabel className='mb-3' controlId="floatingcategory" label="category">
              <Form.Control name='name' type="text" onChange={addcategoryForm} placeholder="Category" />
            </FloatingLabel>





          </Form>

        </Modal.Body>
        <Modal.Footer className='bg-danger' >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} style={{backgroundColor:"red"}}>Add</Button>
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

export default Category


// 1.create a watch history tab in home page
// 2.create new component for watch history
      // table Format (no,card name,link,title)
// 3.create a watch history key in db.json and  value as array

  // when we click on the card add data to db.json, get watch history on db.json