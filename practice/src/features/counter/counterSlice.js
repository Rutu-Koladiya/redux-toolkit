import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    state: 'idle'
}

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount) => {
        const response = await new Promise((resolve) => setTimeout(() => resolve(amount), 1000))
        return response
    }
)

export const incrementIfOdd = (amount) => {
    return (dispatch, getState) => {
        const currentValue = getState().counter.value
        if (currentValue % 2 === 1) {
            dispatch(incrementByAmount(amount))
        }
    }
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value += action.payload
            })
            .addCase(incrementAsync.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer