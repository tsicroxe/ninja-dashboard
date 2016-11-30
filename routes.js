var Ninja = require('./db.js');

module.exports = function(app){
  if(!app){ throw new Error("Must provide app object!");}

  app.get('/ninjas',function(req,res){
    // Grab all ninjas
    res.render('index');
  });

  app.get('/',function(req,res){
    res.redirect('/ninjas');
  });
  app.get('/ninjas/new', function(req,res){
    res.render("new");
  });
  app.post('/ninjas', function(req, res){
    var newNinja = new Ninja(req.body);
    newNinja.save(function(err){
      if(err){ throw err; }
      res.redirect('/ninjas');
    });
  });
};
