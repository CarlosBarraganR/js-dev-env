import chalk from 'chalk'
import express from 'express'
import path from 'path'
import open from 'open'

const port = 3000;
const app = express()

console.log(chalk.green('Starting app in dev mode...'))

app.get('/' , function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err)
  }else{
    open('http://localhost:' + port);
  }
});
