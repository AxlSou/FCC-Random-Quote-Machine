import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    quoteText: '',
    author: '',
    backgroundColor: '#16a085',
    opacity: '1'
}

export const getQuotes = createAsyncThunk('quotes/getQuotes', async () => {
    
    const options = {
        method: 'GET',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
        headers: {
          'X-RapidAPI-Key': '41c18fdf26msh8b4dc70566cffdcp1c02f4jsnacd95146fdb7',
          'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
      };
    
    let quote
    try {
        quote = await axios(options);
    }
    catch (error) {}
    return quote.data
})

export const quoteSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        backgroundChange: (state) => {
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            let hex = '#' + n.slice(0,6)
            state.backgroundColor = hex
        }
    },
    extraReducers: {
        [getQuotes.pending]: (state) => {
        },
        [getQuotes.fulfilled]: (state, action) => {
            state.quoteText = action.payload.content;
            state.author = action.payload.originator.name;
        },
        [getQuotes.rejected]: (state) => {
        }
    }
})

export const { backgroundChange } = quoteSlice.actions;

export default quoteSlice.reducer