module.exports = {
	globDirectory: 'docs/',
	globPatterns: [
		'**/*.{png,ico,html,mjs,css,json,js,md}'
	],
	swDest: 'docs/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
        /styles\/pico-1.5.11\/docs/,
        /composer.json$/,
        /package.json$/,
        /package-lock.json$/
	]
};
