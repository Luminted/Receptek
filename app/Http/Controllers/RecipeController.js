'use strict'

const Category = use('App/Model/Category')

class RecipeController {
    *main (req,res){
        const categories = yield Category.all();

        yield res.sendView('main', { 
        categories: categories.toJSON() 
})
    }

}

module.exports = RecipeController
