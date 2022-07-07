import { configureStore } from "@reduxjs/toolkit";
import fav from './favorite/index'
import movie from './movie/index'
export default configureStore({
reducer:{
allmovie:movie,
allfavorite:fav,
},
});

