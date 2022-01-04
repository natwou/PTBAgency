import React from 'react';
import {Text, Box} from '@chakra-ui/react'
import ChampSelectBG from '../assets/champselect.png'

const ChampSelect = () => {
	return (
		<Box w='100%' h='1200px' backgroundImage={ChampSelectBG} backgroundRepeat='no-repeat' mt='100px' p='5'>
			<Text variant='TitleCenter'>Choose your champion</Text>
		</Box>
	);
};

export default ChampSelect;
