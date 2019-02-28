import webpack from 'webpack';

const publicPath = '/frame/';

export default (config, env, helpers) => {
	config.output.publicPath = publicPath;

	if (env.production) {
	}
	else {
		config.devServer.publicPath = publicPath;
	}
};
