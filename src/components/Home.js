
import MovieList from'./MovieList';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Home() {
 const [movieList,setmovieList]=useState([]);
   
        
        const gitList=()=>{
            const serverurl = `${process.env.REACT_APP_serverURL}/trending`;
            axios(serverurl)
            .then(result=>{
                console.log(result);
                setmovieList(result.data);
            
            })
            .catch(error=>{
                console.log(`there is something error`);
            })

        }

        useEffect(()=>{
            gitList()
        },[])

    return (
        <>
        
        <MovieList data={movieList}/>
        </>
    );
}

export default Home;