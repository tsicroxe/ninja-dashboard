var Ninja = require('./db.js');

module.exports = function(app){
  if(!app){ throw new Error("Must provide app object!");}

  app.get('/ninjas',function(req,res){
    // Grab all ninjas
    Ninja.find({}, function(err, results){
      if(err){console.log(err);}
      res.render('index', {ninjas:results});
    })
  });

  app.get('/',function(req,res){
    res.redirect('/ninjas');
  });

  app.get('/ninjas/new', function(req,res){
    res.render("new");
  });

  app.get('/ninjas/:id/edit', function(req, res){
    Ninja.find({_id: req.params.id}, function(err, response){
      if(err){console.log(err);}
      // console.log(response); //Haha! It's an array. :P
      res.render('edit', {ninja: response[0]})
    });
  });
  app.post('/ninjas/:id/edit', function(req, res){
    Ninja.update({_id: req.params.id}, req.body, function(err, response){
      if(err){console.log(err);}
      res.redirect('/ninjas')
    });
  });

app.post('/ninjas/:id/destroy', function(req, res){
  Ninja.remove({_id: req.params.id}, function(err, result){
    if(err){console.log(err)};
    res.redirect('/ninjas')
  })
})

  app.post('/ninjas', function(req, res){
    var newNinja = new Ninja(req.body);
    newNinja.save(function(err){
      if(err){ throw err; }
      res.redirect('/ninjas');
    });
  });
};
