'use strict'

class EperController {
    * eper(req, res){
        res.send('Eper');
    }

    * hello(req,res){
        yield res.sendView('hello', { name: 'Lev' });
    }
}

module.exports = EperController
