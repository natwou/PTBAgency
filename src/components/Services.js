import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ServicesData } from '../Data/ServicesData';
import Champ from '../assets/champ.png';

const Services = () => {

	const ServiceRender = () => {
		let EmptyTab = [];
		for (let i = 0; i < 6; i++) {
			EmptyTab.push(
				<Box mx="20px" my="10px" p="5" flexShrink="0" d="flex">
					<Box>
						<img style={{
							width: '60px',
							borderRadius: '50%',
							position: 'relative',
							top: '-5px'
						}} src={ServicesData[i]['Image']} alt="" />
					</Box>
					<Box pos="relative" left="10px">
						<Text>{ServicesData[i]['Title']}</Text>
						<Text>{ServicesData[i]['Desc']}</Text>
					</Box>

				</Box>
			);
		}
		return EmptyTab;
	};

	return (
		<>
			<Box h="auto" w="100%" mt="100px">
				<Text variant="TitleCenter"> Our Services</Text>
				<Box d="flex" justifyContent="center" flexWrap="wrap" maxW="900px"
					m="25px auto 0">
					{ServiceRender()}
				</Box>
			</Box>
		</>
	);
};

export default Services;
