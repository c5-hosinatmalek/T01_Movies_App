import { createSlice } from "@reduxjs/toolkit"
const movie=createSlice({
    name:"movi",
    initialState:{
        allmovie:[],
        onemovie:[],
    },
    reducers:({

        setAllmovie:(state,action)=>{
            state.allmovie=action.payload
        },
        setOneMovie:(state,action)=>{
            state.onemovie=state.allmovie.filter((ele)=>{
                return ele.id===action.payload
            })
        },
        loadMore:(state,action)=>{
            state.allmovie=action.payload.slice(0,action.payload)
        }
    })


})

 export const  {setAllmovie,setOneMovie,loadMore}=movie.actions
export default movie.reducer