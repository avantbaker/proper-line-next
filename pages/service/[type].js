import { useState } from 'react';
import { serviceInfo } from '../../data';
import Link from 'next/link';
import '../../assets/styles.css';
import axios from 'axios';

const ServiceCheckout = ({ url }) => {
	const { type: id } = url.query;
	const [employeeId, setEmployeeId] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const submitRequest = () => {
		const request = {
			employeeId,
			service: serviceInfo[id].name,
			price: serviceInfo[id].price
		};
		axios
			.get('/api/submit', {
				params: request
			})
			.then(({ data }) => {
				console.log(data);
				if (data._id) {
					setSubmitted(true);
				}
			});
	};

	const updateEmployeeId = e => {
		setEmployeeId(e.target.value);
	};

	return (
		<div className="container-fluid">
			<section className="flex justify-between content-center pt-8 px-6 pb-8 mb-8 bg-blue-900">
				<h2 className="text-2xl leading-tight font-headin text-white">
					Delta Airlines Sky Spa
				</h2>
				<p className="max-w-xl text-white self-center">
					Proper Line Consulting, LLC.
				</p>
			</section>
			<div style={{ marginTop: '40px' }} className="container mx-auto px-4">
				<div className="service-checkout">
					<div className="back">
						<Link href="/">
							<div className="text-blue-700 flex flex-row items-center">
								<span className="mr-1">
									{'<'} <span>Back</span>
								</span>
							</div>
						</Link>
					</div>
					<div
						style={{ marginTop: '8rem' }}
						className="service-checkout-form container mt-8 max-w-2xl mx-auto"
					>
						<div className="max-w-full rounded shadow-md p-8">
							<div className="service-checkout-details mb-6 flex flex-col items-center">
								<p className="message font-semibold">
									Thank You for your Business
								</p>
								<p className="mb-4">You are getting a:</p>
								<p className="message font-semibold">
									{serviceInfo[id] && serviceInfo[id].name}
								</p>
								<p className="message font-semibold">
									Total: {serviceInfo[id] && serviceInfo[id].price}
								</p>
							</div>
							{!submitted && (
								<div className="fields">
									<div className="field-wrapper mb-4">
										<input
											placeholder="Employee ID"
											type="text"
											onChange={updateEmployeeId}
											value={employeeId}
											className="bg-gray-200 focus:bg-white flex w-full p-5 rounded-sm"
										/>
									</div>
									<div className="field-wrapper">
										<input
											type="submit"
											onClick={submitRequest}
											className="bg-gray-200 focus:bg-white w-full p-5 rounded-sm"
										/>
									</div>
								</div>
							)}
							{submitted && (
								<div className="success text-green-600">
									Submission Successfull!
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ServiceCheckout;
