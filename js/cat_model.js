import Backbone from 'backbone';

let CatModel = Backbone.Model.extend ({
  urlRoot: 'https://api.parse.com/1/classes/Region',

  idAttribute: 'objectId'
});

export default CatModel;