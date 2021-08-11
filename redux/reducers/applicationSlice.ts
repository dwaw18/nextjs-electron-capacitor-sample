import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '../store';

export const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        globalCounter: 0 as number,
    },
    reducers: {
        addToGlobalCounter: (state) => {
            state.globalCounter += 1;
        },
        subtractFromGlobalCounter: (state) => {
            state.globalCounter -= 1;
        },
    },
    extraReducers: {
        [HYDRATE]: (counter, action) => {
            console.log('HYDRATE...');
        }
    }
});

export const globalCounter = (state: RootState) => state.application.globalCounter;

export const {addToGlobalCounter, subtractFromGlobalCounter} = applicationSlice.actions;

export default applicationSlice.reducer;
