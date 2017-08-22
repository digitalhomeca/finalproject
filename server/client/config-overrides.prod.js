const path = require('path');

module.exports = function(config) {
  config.externals = {
    jquery: 'jQuery'
  }
}