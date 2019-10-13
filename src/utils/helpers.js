export const stringToCssClass = string =>
	string
		.split(' ')
		.join('-')
		.toLowerCase()
