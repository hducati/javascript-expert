import Draftlog from 'draftlog';
import chalk from 'chalk'
import chalkTable from 'chalk-table'
import readLine from 'readline'

import database from './../database.json' assert {type: "json"}
import Person from './person.js'

Draftlog(console).addLineListener(process.stdin);

const DEFAULT_LANG = "pt-BR"
const options = {
  leftPad: 2,
  columns: [
    { field: 'id', name: chalk.cyan("ID")},
    { field: 'vehicles', name: chalk.blue("Vehicles")},
    { field: 'kmTraveled', name: chalk.cyan("KM Traveled")},
    { field: 'from', name: chalk.magenta("From")},
    { field: 'to', name: chalk.cyan("To")},
  ]
}

const table = chalkTable(options, database.map(item => new Person(item).formatted(DEFAULT_LANG)))
const print = console.draft(table)

const terminal = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})