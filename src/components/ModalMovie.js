import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
//import { useAccordionButton } from 'react-bootstrap';

function ModalMovie(props) {
    const handelSubmit=(e)=>{
     e.preventDefault();
     console.log(e.target.comment.value);
     [props.item.comment]=[e.target.comment.value];
     props.callAddToFav(props.item);
     props.handleCloseFlag();
    }

    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleCloseFlag} Key={props.item.id}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.item.poster_path} width='100%'></Image>

                    <Form onSubmit={handelSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Add comment</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Add your comment here"
                                name="comment"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">     Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={props.handleCloseFlag}>
                        Close
                    </Button>


                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalMovie;