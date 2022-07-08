import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';

import { AiOutlineStar } from 'react-icons/ai';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import "./style.css"
import { Link } from 'react-router-dom';
import { setOneMovie } from '../../redux/movie';
import { useDispatch } from 'react-redux/es/exports';

import { setAllmovie } from '../../redux/movie';
import axios from 'axios';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
const MAINPAGE=()=> {
  const [isLoading, setLoading] = useState(false);
  const [steppage,setSteppage]=useState(0)
  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a").then((result)=>{
    
    dispatch(setAllmovie(result.data.results.slice(0,9+steppage)))
   
    })
  },[])
  useEffect(() => {
  
    if (isLoading) {
      simulateNetworkRequest().then(() => {
       
        setLoading(false);
       
      });
     
    }
   
  }, [isLoading]);

  const handleClick = () =>{ 
   
    setLoading(true)
    setSteppage(steppage+9)
  };

  const stars=[1,2,3,4,5,6,7,8,9,10]
  const dispatch=useDispatch()
    const mov=useSelector((state)=>{
        return{
            movs:state.allmovie.allmovie
        }
    })
  return (
    <div className='contenur_all_movie' >
       
        <div className='content_movie' >
       {mov.movs&&mov.movs.map((ele,index)=>{
        
        return( <Link key={index}  onClick={()=>{
          dispatch(setOneMovie(ele.id))
        }} className='movislink' to={`/main_movi`}>
        <Card style={{width:'18rem'}} >
        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/"+ele.poster_path} />
        <Card.Body>
          <Card.Title className='titelcard' >{ele.original_title.split("").slice(0,25)}{ele.original_title.split("").length>25?"...":""}</Card.Title>
          <Card.Text className='textcard' style={{ height: '5rem'}} >
           {ele.overview.split("").slice(0,70)}...
          </Card.Text>
          <div  className='startrating' >
          {
          stars.map((element,index)=>{
            if(index<ele.vote_average){
              return<AiOutlineStar style={{ color: "goldenrod"}}  />
            }else{
              return<AiOutlineStar/>
            }
           
          })
          }
         </div>
          <div className='contentVotesanddat' >
             <Card.Text  >
          {ele.release_date}
          </Card.Text>
          <Card.Text  >
          {ele.vote_count} Votes
          </Card.Text>
          </div>
         
        </Card.Body>
      </Card>
        </Link>)
       })

       }
       
        </div>
        <Button
        className='loade_more'
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null
       
      }
     
    >
      {isLoading ? 'Loading…' : 'Explore More Movies'}
    </Button>
   
    </div>
  );
}

export default MAINPAGE;