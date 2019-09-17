const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ articles: [] }).write()

module.exports = {
    pushDb: function() {       
        var dbItems =  db.getState()   
        return dbItems;
    },
    pushItem: function(article){
        var dbItems = db.getState()        
        if (dbItems.articles.length == 0){
            article.id = 1
        }  else{
            article.id = dbItems.articles.length + 1
        }              
        db.get('articles')
        .push(article)
        .write()
        return;
    }, 
    deleteItem:  function(id){        
        var dataId = parseInt(id)
              
        db.get('articles')
            .remove({id:dataId})            
            .write()    
        return;
    }
  };