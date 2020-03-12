import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import '../assets/styles.css';

function Services({ data }) {
	return !data.length > 0 ? null : (
		<Fragment>
			<div className="text-4xl mb-6">Barber Services</div>
			{data.map((section, idx) => {
				const sectionClass = data.length - 1 === idx ? 'justify-center' : '';
				return (
					<div
						key={`section-${idx}`}
						className={`flex flex-wrap -mx-4 text-center mb-8 ${sectionClass}`}
					>
						{section &&
							section.map((item, idx) => {
								return (
									<Link
										href={`/service/:type`}
										key={`item-${idx}`}
										as={`/service/${item.id}`}
									>
										<div className="lg:w-1/3 px-5">
											<div className="pb-6 rounded shadow-md bg-gray-300 w-full mb-8 rounded-sm">
												<div className="px-8 pt-8">
													<h3 className="text-xl font-heading font-semibold">
														{item.name}
													</h3>
													<p>{item.price}</p>
												</div>
											</div>
										</div>
									</Link>
								);
							})}
					</div>
				);
			})}
		</Fragment>
	);
}

export default Services;
