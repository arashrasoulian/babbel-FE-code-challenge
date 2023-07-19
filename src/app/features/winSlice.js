import { createSlice } from "@reduxjs/toolkit";
import { useFetch } from "../../hook/useFetch";


const initialState = {
    winnerValue : null,
    gameData : {}
}


export const winSlice = createSlice ({
    name : `win`,
    initialState,
    reducers:{
        winnerState :  ((state ,action) =>{
            
                state.winnerValue =  action.payload
              }
        ),
        fetchGamedata : ((state ,action) =>{
            state.gameData = action.payload
            
        })

    }


})

export const {winnerState , fetchGamedata} = winSlice.actions
export default winSlice.reducer;