import React from 'react';

const Nav = () => {
	return (
		<nav style = {{width: '100%', height: '70px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}}>
			<ul style = {{
				display        : 'flex',
				listStyle      : 'none',
				justifyContent : 'center',
				alignItems     : 'center',
				height         : '70px',
				backgroundColor: '#79018C'
			}}>
				<li style = {{marginRight: '140px', fontWeight: '900'}}>PTB Agency</li>
				<li>Joueur</li>
				<li>Services</li>
				<li>Missions</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Nav;
