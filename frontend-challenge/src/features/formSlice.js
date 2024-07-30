import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitForm = createAsyncThunk(
	'form/submitForm',
	async (formData) => {
		const response = await axios.post('https://reqres.in/api/workintech', formData);
		return response.data;
	}
);

const formSlice = createSlice({
	name: 'form',
	initialState: {
		loading: false,
		data: null,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(submitForm.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(submitForm.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(submitForm.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default formSlice.reducer;
