/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import store from './App/store';
import router from './Router/router.jsx';
import { LanguageProvider } from './hook/context/LanguageContext.jsx';
import "./i18n";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<LanguageProvider>
			<RouterProvider router={router} />
		</LanguageProvider>
	</Provider>,
)
