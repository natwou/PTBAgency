import React from 'react';
import { Text, Box } from '@chakra-ui/react'
import {LoremIpsum} from 'react-lorem-ipsum'

const Mission = () => {
	return (
		<>
			<Box w='100%' h='200px' mt='100px'>
				<Text variant='Title'>Our mission</Text>
				<Text variant='Para' textAlign="center" mt="50px">
					<LoremIpsum avgWordsPerSentence={1}/>
				</Text>
			</Box>
		</>
	);
};

export default Mission;
