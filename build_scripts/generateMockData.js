import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk'

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/mockdb.json", json, err => {
  if (err)
    return console.log(chalk.red(err));
  else
    return console.log(chalk.green("Mock Data Generated."));
});
