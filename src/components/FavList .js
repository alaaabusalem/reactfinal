
import { useEffect, useState } from 'react';
import FavListCard from './FavListCard';
import axios from 'axios';

function FavList() {
 const [favlist,setfavlist]=useState([]);

 
       
        
       
        const gitList=()=>{
            const serverurl = `${process.env.REACT_APP_serverURL}/gitFavList`;
            axios(serverurl)
            .then(result=>{
                console.log(result);
                setfavlist(result.data);
           
            })
            .catch(error=>{
                console.log(`there is something error`);
            })

        }
        

        useEffect(()=>{
            gitList()
        },[]);

       

    return (
        <>
        <FavListCard favlist={favlist} setfavlist={setfavlist}/>
      </>
        
    );
}

export default FavList;