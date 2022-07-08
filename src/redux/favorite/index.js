import { createSlice } from "@reduxjs/toolkit"

const fav=createSlice({
    name:"mu_favorite",
    initialState:{
        myfav:JSON.parse(localStorage.getItem("fav")),
        numfav:0,
    },
    reducers:{
        addFav:(state,action)=>{
            const val=[]
            JSON.parse(localStorage.getItem("fav")).map((ele)=>{
               return val.push(ele.id)
            })
                  if(!val.includes(action.payload.id)){
                    state.myfav.push(action.payload)
                    localStorage.clear()
                    localStorage.setItem("fav",JSON.stringify(state.myfav))
                  }
          
              
               
           
        },
        clearFav:(state,action)=>{
            state.myfav=null
            localStorage.clear()
        },
        deleteOneMovi:(state,action)=>{
            state.myfav= state.myfav.filter((ele)=>{
                return ele.id!==action.payload
            })
            localStorage.clear()
            localStorage.setItem("fav",JSON.stringify(state.myfav))
        },
        setFav:(state,action)=>{
            state.myfav=localStorage.getItem("fav")
        },
        counterPlusFavList:(state,action)=>{
            state.numfav=state.numfav+action.payload
        }
        
    }
    
})

export const{addFav,clearFav,deleteOneMovi,setFav,counterPlusFavList}=fav.actions
export default fav.reducer