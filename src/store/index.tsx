import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './auth'


const store = configureStore({
    reducer: { data: dataReducer }
})

export default store

export type RootState = ReturnType<typeof dataReducer>