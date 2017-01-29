export default {
	entry: './index.js',
	external: ['@emmetio/field-parser'],
	targets: [
		{format: 'cjs', dest: 'dist/output-renderer.cjs.js'},
		{format: 'es',  dest: 'dist/output-renderer.es.js'}
	]
};
