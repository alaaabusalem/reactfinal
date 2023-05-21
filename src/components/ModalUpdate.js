import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalUpdate(props) {
    const handelSubmit = (e) => {
        e.preventDefault();
        
        [props.item.title]=[e.target.title.value];
        [props.item.release_date]=[e.target.release_date.value];
        [props.item.overview]=[e.target.overview.value];
        [props.item.comment]=[e.target.comment.value];
         console.log(props.item);
         const serverURL = `${process.env.REACT_APP_serverURL}/updateFavList`;
         axios.put(serverURL , props.item )
         .then(response=>{
             console.log(response)
             //props.reloadList(response);
         })
         .catch((error)=>{
             console.log(error)
       });
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
                            <Form.Label>title</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={props.item.title}
                                name="title"
                            />
                            <Form.Label>release_date</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={props.item.release_date}
                                name="release_date"
                            />
                            <Form.Label>overview</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={props.item.overview}
                                name="overview"
                            />

                            <Form.Label>comment</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={props.item.comment}
                                name="comment"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">     update
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
    )
}
export default ModalUpdate;