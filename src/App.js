import {ChakraProvider} from '@chakra-ui/react';
import {DefaultTheme} from './Theme/DefaultTheme';
import Main from './page/Main';

function App() {
	return (
		<ChakraProvider theme = {DefaultTheme}>
			<Main />
		</ChakraProvider>
	);
}

export default App;
