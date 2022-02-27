import { createSlice } from "@reduxjs/toolkit"

interface DataState {
    data: []
}  

const initialDataState: DataState = {
    data: []
}

const dataSlice = createSlice({
    name: 'data',
    initialState: initialDataState,
    reducers: {
        setData(state, action) {
            const newData = action.payload
            state.data = newData
        }
    }
})
export const dataActions = dataSlice.actions

export default dataSlice.reducer