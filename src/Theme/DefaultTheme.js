import { extendTheme } from '@chakra-ui/react';
import {TextStyle as Text} from './components/TextStyle';

export const DefaultTheme = extendTheme({
	styles: {
		global: {
			body: {
				bg: '#440A67'
			},
			nav: {
				bg: '#B4AEE8'
			}
		}
	},
	components: {
		Text
	}
})