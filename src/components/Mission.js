import React from 'react';
import { Text, Box } from '@chakra-ui/react'
import {LoremIpsum} from 'react-lorem-ipsum'

const Mission = () => {
	return (
		<>
			<Box w='100%' h='200px' mt='100px'>
				<Text variant='TitleCenter'>Our mission</Text>
				<Text variant='Text'>
					<LoremIpsum avgWordsPerSentence={1}/>
				</Text>
			</Box>
		</>
	);
};

export default Mission;
