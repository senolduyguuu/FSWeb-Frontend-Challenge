/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm } from '../../features/formSlice';

const FormPage = () => {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const formState = useSelector((state) => state.form || {});
	const { loading, error, data } = formState;

	const onSubmit = (formData) => {
		dispatch(submitForm(formData));
	};

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="p-8 rounded-lg shadow-lg w-full max-w-md">
				<h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Contact Form</h2>
				{error && <p className="text-red-500">{error}</p>}
				{data && <p className="text-green-500">Form submitted successfully!</p>}
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div>
						<label className="block text-gray-700 dark:text-gray-300" htmlFor="firstName">First Name</label>
						<input
							{...register('firstName')}
							id="firstName"
							className="mt-1 w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
							type="text"
						/>
					</div>
					<div>
						<label className="block text-gray-700 dark:text-gray-300" htmlFor="lastName">Last Name</label>
						<input
							{...register('lastName')}
							id="lastName"
							className="mt-1 w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
							type="text"
						/>
					</div>
					<div>
						<label className="block text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
						<input
							{...register('email')}
							id="email"
							className="mt-1 w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
							type="email"
						/>
					</div>
					<div>
						<button
							type="submit"
							className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
							disabled={loading}
						>
							{loading ? 'Submitting...' : 'Submit'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormPage;
