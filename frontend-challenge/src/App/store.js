import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from '../features/darkModeSlice';
// import languageReducer from '../features/languageSlice';

const store = configureStore({
	reducer: {
		darkMode: darkModeReducer,
		// language: languageReducer,

	},
});

export default store;
