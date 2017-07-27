const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  'filename': 'assets/css/style.css'
});
const url = require('../package.json').homepage;
const description = require('../package.json').description;

module.exports = [{
  'entry': './src/js/index.js',
  'output': {
    'path': __dirname,
    'filename': 'assets/js/bundle.js'
  },
  'module': {
    'rules': [
      {'test': /\.js$/, 'exclude': /node_modules/, 'use': ['eslint-loader']},
      {'test': /\.vue$/, 'use': 'vue-loader'},
      {'test': /\.json$/, 'use': 'json-loader'},
      {'test': /\.ejs$/, 'use': 'ejs-loader'},
      {
        'test': /\.scss$/,
        'use': extractSass.extract({
          'use': [
            {'loader': 'css-loader'},
            {'loader': 'sass-loader'}
          ],

          // use style-loader in development
          'fallback': 'style-loader'
        })
      }
    ]
  },
  'devServer': {
    'contentBase': 'dist',
    'inline': true
  },
  'node': {
    'fs': 'empty'
  },
  'plugins': [
    new HtmlWebpackPlugin({
      'template': `${__dirname}/../src/html/index.ejs`,
      'filename': 'index.html',
      'inject': 'body',
      'minify': {
        'collapseInlineTagWhitespace': true,
        'collapseWhitespace': true,
        'preserveLineBreaks': true
      },
      'title': 'REPLYCA',
      'url': url,
      'description': description,
      'locale': 'en'
    }),
    extractSass
  ]
},
{
  'entry': './src/js/index-ja.js',
  'output': {
    'path': __dirname,
    'filename': 'assets/js/bundle-ja.js'
  },
  'module': {
    'rules': [
      {'test': /\.js$/, 'exclude': /node_modules/, 'use': ['eslint-loader']},
      {'test': /\.vue$/, 'use': 'vue-loader'},
      {'test': /\.json$/, 'use': 'json-loader'},
      {'test': /\.ejs$/, 'use': 'ejs-loader'},
      {
        'test': /\.scss$/,
        'use': extractSass.extract({
          'use': [
            {'loader': 'css-loader'},
            {'loader': 'sass-loader'}
          ],

          // use style-loader in development
          'fallback': 'style-loader'
        })
      }
    ]
  },
  'devServer': {
    'contentBase': 'dist',
    'inline': true
  },
  'node': {
    'fs': 'empty'
  },
  'plugins': [
    new HtmlWebpackPlugin({
      'template': `${__dirname}/../src/html/index.ejs`,
      'filename': 'ja/index.html',
      'inject': 'body',
      'minify': {
        'collapseInlineTagWhitespace': true,
        'collapseWhitespace': true,
        'preserveLineBreaks': true
      },
      'title': 'REPLYCA',
      'url': url,
      'description': description,
      'locale': 'ja'
    }),
    extractSass
  ]
}
];
