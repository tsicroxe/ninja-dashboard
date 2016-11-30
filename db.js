var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ninja_dash');

var NinjaSchema = new mongoose.Schema({
  name: String,
  description: String,
},
{
  timestamps: true
}
);

mongoose.Promise = global.Promise;

module.exports = mongoose.model('Ninja', NinjaSchema);
