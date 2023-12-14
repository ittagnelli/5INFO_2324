import adapter from '@sveltejs/adapter-static';


const config = {
	kit: {
		adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: undefined,
            precompress: false,
            strict: true
        })
	}
};
export default config;