/*
* index.js
* Copyright (C) 2016 dhilipsiva <dhilipsiva@gmail.com>
*
* Distributed under terms of the MIT license.
*/
(function(){
  'use strict';
  var sass = require('node-sass'),
    pug = require('pug'),
    juice = require('juice');

  var result = sass.renderSync({
    file: 'source/scss/main.scss',
    outputStyle: 'compressed',
    outFile: 'tmp/style.css',
    sourceMap: false,
  });
  var styles = result.css.toString();

  var html = pug.renderFile('source/pug/text.pug');
  var result = juice(html, {extraCss: styles});

  console.log(result);
})();
