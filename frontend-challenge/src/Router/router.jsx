import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import FormPage from '../component/FormPage/FormPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/form-page',
		element: <FormPage />,
	},
]);

export default router;
