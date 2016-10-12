'use strict'

const Schema = use('Schema')

class RecipesSchema extends Schema {

  up () {
    this.create('recipes', (table) => {
      table.increments()
      table.string('name', 50);
      table.string('instructions');
      table.increments()
      table.increments()
      table.increments()
    })
  }

  down () {
    this.table('recipes', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = RecipesSchema
