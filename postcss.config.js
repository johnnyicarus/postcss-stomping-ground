var vars = require('./vars.js');
var map = require('./map.js');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-simple-vars')({ variables: vars }),
    require('postcss-map')({ maps: [ map ]}),
    require('autoprefixer')
  ]
}
