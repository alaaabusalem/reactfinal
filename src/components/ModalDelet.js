

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalDelet(props) {
    const handelSubmit = (e) => {
        e.preventDefault();
        
       
         const serverURL = `${process.env.REACT_APP_serverURL}/deletitem/${props.item.id}`;
         axios.delete(serverURL)
         .then(response=>{
             console.log(response.data)
            // props.reloadList(response);
             
         })
         .catch((error)=>{
             console.log(error)
       });
       props.handleCloseFlagDelet();
    }
    return (
        <>
            <Modal show={props.showFlagDelet} onHide={props.handleCloseFlagDelet} Key={props.item.id}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handelSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Are you sure that you want to delete this Movie!</Form.Label>
                            
                        </Form.Group>
                        <Button variant="primary" type="submit">     Yes
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={props.handleCloseFlagDelet}>
                        No
                    </Button>


                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalDelet;