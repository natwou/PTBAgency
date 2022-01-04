import React from 'react';
import ChampSelect from '../components/ChampSelect';
import Mission from '../components/Mission';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Nav from '../components/Nav';

const Main = () => {
	return (
		<div>
			<Nav />
			<ChampSelect />
			<Mission />
			<Services />
			<Contact />
		</div>
	);
};

export default Main;
