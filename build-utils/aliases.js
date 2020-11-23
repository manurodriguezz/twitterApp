const path = require('path');

module.exports = {
  Api: path.resolve(__dirname, '../src/api'),
  Assets: path.resolve(__dirname, '../src/assets'),
  Components: path.resolve(__dirname, '../src/components'),
  Containers: path.resolve(__dirname, '../src/containers'),
  Data: path.resolve(__dirname, '../src/data'),
  Store: path.resolve(__dirname, '../src/store'),
  Actions: path.resolve(__dirname, '../src/store/actions'),
  Reducers: path.resolve(__dirname, '../src/store/reducers'),
};
