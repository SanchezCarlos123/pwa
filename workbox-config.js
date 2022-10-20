module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,png,gif,jpg,ico,webp,json,vtt,mp4,mp3,ogg,webm,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};