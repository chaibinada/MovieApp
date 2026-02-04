import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Add({movielist, setmovielist}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newmovie, setnewmovie] = useState({
        name:"",
        posterurl:"",
        description:"",
        rating:""
    })

    const handleAdd = ()=>setmovielist([...movielist,newmovie])

    return (
    <div className='add'>
        <Button  onClick={handleShow} className='btnplus'>
            +
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>movie Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter movie name" onChange={(e)=>setnewmovie({...newmovie,name:e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text" placeholder="Enter URL " onChange={(e)=>setnewmovie({...newmovie,posterurl:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>movie description</Form.Label>
                        <Form.Control type="text" placeholder="Enter movie description" onChange={(e)=>setnewmovie({...newmovie,description:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>movie rate</Form.Label>
                        <Form.Control type="" placeholder="Enter movie rate" onChange={(e)=>setnewmovie({...newmovie,rating:e.target.value})}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{handleAdd();handleClose()}} >
                add
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default Add