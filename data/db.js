const fs = require('fs')
const yaml = require('js-yaml')

const db = yaml.safeLoadAll(fs.readFileSync(`${__dirname}/db.yml`, {encoding: 'utf-8'}))

module.exports = db