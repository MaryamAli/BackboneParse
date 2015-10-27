import Backbone from 'backbone';
import CatModel from './cat_model';

// Responsible for loading all of the data and creating an instance of the model
// Url is always the same as the model's

let CatsCollection = Backbone.Collection.extend ({

  url: 'https://api.parse.com/1/classes/Assignment18',

  model: CatModel,

  parse: function (data){
    return data.results;
  }
});

export default CatsCollection;