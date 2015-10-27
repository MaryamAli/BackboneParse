import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
// Import catTemplate from './catTemplate';
// Import CatsCollection from './cats_collection';
// Import CatModel from './CatModel';

const APP_ID ='agyBBicntlORhkPegv1ES8rpcNTEE2qclq8333Wl';
const API_KEY = 'WMfyy9mFvvS8j3AW7PLhuJMAf1yxKE7gw46nxe9I';

$.ajaxSetup ({
  headers: {
    'X-Parse-Application-Id': APP_ID ,
    'X-Parse-REST-API-Key': API_KEY
  }
});

import CatsCollection from './cats_collection';
import CatTemplate from './cat_template';
// Import CatModel from '.cat_model'

let cats = new CatsCollection();


// Creating an empty DOM node

function renderCats() {
  let $ul = $('<ul></ul>');

  // Iterate each model
  cats.each(function(cat){
    // Cat is an instance of CatModel

    // Raw data from cat model
    let data = cat.toJSON();
    console.log('data', data);

    // Data passed to this template
    let templateString = CatTemplate(data);
    console.log ('templateString', templateString);

    // create li node (DOM) from templateSTring
    let $li = $(templateString);

    // let $li = CatTemplate(data);

    // add to ul
    $ul.append($li);
  });

  // add to body
  $(`body`).html($ul);
}

  cats.fetch().then(renderCats);



// Window.cats = cats;
// Window.renderCats = renderCats;
// Window.CatsCollection = CatsCollection;

console.log('Hello, World');