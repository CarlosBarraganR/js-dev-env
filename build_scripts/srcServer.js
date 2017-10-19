import chalk from 'chalk'
import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import config from '../webpack.config.dev'

//Because this is not in the final UI we disable our linting rule in the whole file with:
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

console.log(chalk.green('Starting app in dev mode...'))

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/' , (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {

  res.json()

});

app.listen(port, (err) => {
  if(err){
    console.log(err)
  }else{
    open('http://localhost:' + port);
  }
});
