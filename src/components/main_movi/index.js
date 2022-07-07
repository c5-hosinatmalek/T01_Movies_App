import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect, useState,useContext } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { setOneMovie } from '../../redux/movie';
import { useSelector } from 'react-redux/es/exports';
import { addFav } from '../../redux/favorite';
import Modal from 'react-bootstrap/Modal';
import { counterPlusFavList } from '../../redux/favorite';
import './style.css'
import { usecount } from '../../App';
function MAINMOVI() {
  const {countFav,setCountFav}=useContext(usecount)
    const navgate=useNavigate()
   const dispatch=useDispatch()
   const [className,stClassName]=useState("")
    let {id}=useParams()
    // useEffect(()=>{
    //     dispatch(setOneMovie(id))
    // },[])
    const mov=useSelector((state)=>{
        return{
            movs:state.allmovie.onemovie
        }
    })
    console.log(mov.movs[0].poster_path);
  return (
    <div className='contenur_slider' >
        
        <div className='right_box' >
            <div>
                <h1>{mov.movs[0].original_title}</h1>

            </div>
            <div><p>{mov.movs[0].overview}</p></div>
            <div><h5>* Release Data : {mov.movs[0].release_date}</h5></div>
            <div><h5>* Original Language : {mov.movs[0].original_language ==="en"?"Einglish":""}</h5></div>
            <div className='contenur_button' >
            <div className="mb-2">
        <Button onClick={()=>{
            navgate("/")
        }} variant="primary" size="lg">
         Back to main page
        </Button>{' '}
        <Button onClick={()=>{
           stClassName("active")
           dispatch(counterPlusFavList(1))
           setCountFav(JSON.parse(localStorage.getItem("fav")).length)
            
        }} variant="primary" size="lg">
       Add to Favorites
        </Button>
      </div>
      
            </div>
            <div className={`model_pup ${className}`} >
            <Modal.Dialog>
                <Modal.Header closeButton onClick={()=>{ stClassName("")}}>
                  <Modal.Title>Add Movie To Favorites</Modal.Title>
                </Modal.Header>
          
                <Modal.Body>
                  <p className='Doyouwant' >Do you want to add Minions: The Rise of Gru to favorites list?</p>
                </Modal.Body>
          
                <Modal.Footer>
                  <Button onClick={()=>{ stClassName("")}} variant="secondary">Close</Button>
                  <Button onClick={()=>{ 
                    dispatch(addFav(mov.movs[0]))
                    stClassName("")
                    setCountFav(JSON.parse(localStorage.getItem("fav")).length)
                }
                    } variant="primary">OK</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </div>
        </div>
    <Carousel className='slide_movie' fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${mov.movs[0].poster_path}`}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${mov.movs[0].backdrop_path}`}
          alt="Second slide"
        />

       
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default MAINMOVI;