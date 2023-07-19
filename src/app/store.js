import { configureStore } from "@reduxjs/toolkit"
import winReduser from "./features/winSlice"

export  const store = configureStore({
 reducer: {
  win: winReduser,
}

})