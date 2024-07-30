import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from '../features/darkModeSlice';
import formSlice from '../features/formSlice';
const store = configureStore({
	reducer: {
		darkMode: darkModeReducer,
		formSlice: formSlice
	},
});

export default store;
