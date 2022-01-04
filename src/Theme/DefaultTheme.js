import { extendTheme } from '@chakra-ui/react';

export const DefaultTheme = extendTheme({
	styles: {
		global: {
			body: {
				bg: '#4C0070',
				color: '#fff',
				fontFamily: 'Poppins'
			},
			li: {
				mr: '20px'
			}
		}
	},
	components: {
		Text: {
			baseStyle: {
				fontWeight: '600'
			},
			variants: {
				'Title': {
					fontSize: '2em',
				},
				'Text': {
					fontSize: '1.2em',
					mt: '10px',
					fontWeight: '300',
					textAlign: 'Center'
				},
				'TitleCenter': {
					fontSize: '2em',
					textAlign: 'Center'
				}
			}
		}
	}
})
	;