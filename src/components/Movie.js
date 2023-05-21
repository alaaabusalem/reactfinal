//import{Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from './ModalMovie';
import { useState } from 'react';

function Movie(props) {
  const [showFlag, setshowFlag] = useState(false);
  function handleShowFlag() {
    setshowFlag(true);
  }
  function handleCloseFlag() {
    setshowFlag(false);
  }
  // console.log(item)

  //function callAddToFav(item){
  //  props.addToFav(item);
  //}
  return (
    <>
      <Card style={{ width: '18rem' }} Key={props.item.id}>
        <Card.Img variant="top" src={props.item.poster_path} alt='image' />
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <p>{props.item.release_date}</p>
          <Card.Text>
            {props.item.overview}
          </Card.Text>
          <Button variant="primary" onClick={() => { handleShowFlag() }}>Add to favorite list</Button>
        </Card.Body>
      </Card>
      <ModalMovie showFlag={showFlag} item={props.item} handleCloseFlag={handleCloseFlag} callAddToFav={props.addToFav} />

    </>
  );
}

export default Movie;