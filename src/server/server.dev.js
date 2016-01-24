import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev.js';

export default function (app) {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    quiet: true,
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  }));
  app.use(webpackHotMiddleware(compiler));

  return app;
}
