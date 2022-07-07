import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/exports';
import { deleteOneMovi } from '../../redux/favorite';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { usecount } from '../../App';
import './style.css'
const MYFAV=()=>{
    const {countFav,setCountFav}=useContext(usecount)
    const dispatch=useDispatch()

const allfav=useSelector((state)=>{
    return{
        allFavorite:state.allfavorite.fav
    }
})

    return(
        <div className='contenur_mufavorite' >
           { JSON.parse(localStorage.getItem("fav")).length<1? <h1 className='message_list active' >Favorites list is empty</h1>:<h1 className='message_list' >Favorites list is empty</h1>}
            {
                JSON.parse(localStorage.getItem("fav"))&&JSON.parse(localStorage.getItem("fav")).map((ele)=>{
                    return(
                        <Card className='card_my_fav'  style={{width:'18rem'}} >
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/"+ele.poster_path} />
                        <Card.Body>
                          <Card.Title>{ele.original_title}</Card.Title>

                          <Button className='button_my_fav' onClick={()=>{dispatch(deleteOneMovi(ele.id))
                         setCountFav(JSON.parse(localStorage.getItem("fav")).length)}} variant="primary">delete</Button>
                        </Card.Body>
                      </Card>
                    )
                })
            }
        </div>
        
    )
}

export default MYFAV