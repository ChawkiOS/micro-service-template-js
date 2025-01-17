module.exports = {
	moduleFileExtensions: [
		'js',
		'ts',
		'json'
	],
	testMatch: [
		// '**/?(*.)+(spec|test).js?(x)',
		'**/?(*.)+(spec|test).ts?(x)',
	],
	transform: {
		'^.+\\.ts?$': 'ts-jest',
	}
};
