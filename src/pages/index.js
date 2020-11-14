import React from 'react';
import { Link } from 'gatsby';
import oceanicMantaRays from '../images/oceanicMantaRays.jpg'

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
	return (
		<div>
			<Layout>
				<Head title="Home"/>
				<h1>Hey there, fellow diver!</h1>
				<h2>Welcome to the Scuba Republic dive blog.</h2>
				<img src={oceanicMantaRays} alt="oceanic manta rays" />
				<p>
					Want to dive in Indonesia? <Link to="/contact">Contact us.</Link>
				</p>
			</Layout>
		</div>
	);
};

export default IndexPage;
