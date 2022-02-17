import { Rating } from "@mui/material";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddMovie=({handleAdd})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [poster,setPoster] = useState('')
    const [rating,setRating] = useState(0)

    return(
        <div>
            <Button variant="outline-success" onClick={handleShow} style={{marginTop :'15px'}}>
                +
            </Button>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add a new movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title"  onChange={(e)=> setTitle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter description"  onChange={(e)=> setDescription(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Poster</Form.Label>
                        <Form.Control type="text" placeholder="Enter poster" onChange={(e)=> setPoster(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Rating</Form.Label>
                        <br/>
                        <Rating name="simple-controlled" onChange={(e)=> setRating(e.target.value)} />
                    </Form.Group>
                    
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{handleAdd({title ,description ,posterURL : poster,rating,id : Math.random()});handleClose()}}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddMovie