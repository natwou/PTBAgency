import React from 'react';
import {Text, Box, Image} from '@chakra-ui/react'
import ChampSelectBG from '../assets/champselect.png'

const ChampSelect = () => {
	return (
		<Box w='100%' h='auto' mt='100px' p='5'>
			<Text variant='TitleCenter'>Choose your champion</Text>
			<Image src={ChampSelectBG} w="1500px" h='auto' d='block' margin='20px auto 0'/>
		</Box>
	);
};

export default ChampSelect;
