import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
	return (
		<div>
			<Layout>
				<Head title="About" />
				<h1>About us</h1>
				<p>
					Indonesia offers some of the most pristine and exciting diving on the planet. We at SCUBA REPUBLIC
					are passionate about the sea and its marine life and love to share our experience with you. Based in
					Komodo, Raja Ampat and South Sulawesi we are in the prime spots for adventure. Whether you’d like to
					spend your holiday on one of our charismatic liveaboards, hop from island to island with our
					adventurous Safari trips, prefer to relax in our comfortable beach bungalows or expand your skills
					with a dive course, we have an option for all tastes. No matter your preference – our goal is to
					provide world class diving and excellent service with an eco-friendly and environmentally
					sustainable approach.
				</p>
				<p>See our full website for booking and more information.</p>
				<a href="www.scuba-republic.com">www.scuba-republic.com</a>
			</Layout>
		</div>
	);
};

export default AboutPage;
