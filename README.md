## What's this?

A scaffold of react application for my personal use.

(or use [this](https://github.com/ucfan/react-redux-scaffold) for building redux application.)

## What's in it?

- react
- react-dom
- babel (presets: es2015, stage-0, jsx)
- express
- webpack
  - extract-text-webpack-plugin
  - webpack-dev-server
  - webpack-dev-middleware
  - webpack-hot-middleware
  - css-loader, style-loader, postcss-loader
- postcss
  - precss, autoprefixer


## Usage

```JSON
{
  "scripts": {
    "build": "npm run build:client && npm run build:server",
    "build:client": "webpack",
    "build:server": "babel src/server -d bin",
    "start": "node bin/server.js",
    "start:dev": "DEV=true node bin/server.js",
  },
}
```
