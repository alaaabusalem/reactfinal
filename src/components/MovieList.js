import Movie from "./Movie";
import axios from 'axios';

//import {  useState } from 'react';

function MovieList(props) {


  //const [showFlag,setshowFlag]=useState(false);
  const addToFav = (item) =>{
    console.log(item)
    console.log(item);
    const serverURL = `http://localhost:3005/addToFav`;
    axios.post(serverURL , item )
    .then(response=>{
        console.log(response.data)
        
    })
    .catch((error)=>{
        console.log(error)
  });
}
  return (
    <>
     {props.data.map(item=>{
      return (
     <div Key={item.id}>
      <Movie item={item} addToFav={addToFav}/>
      </div>
        );
     })}
    </>
  );
}

export default MovieList;