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
    juice = require('juice'),
    cheerio = require('cheerio'),
    styles, html, inlinedHtml, $, result, css;

  styles = sass.renderSync({
    file: 'source/scss/main.scss',
    outputStyle: 'compressed',
  });
  css = styles.css.toString();

  html = pug.renderFile('source/pug/layout.pug');
  inlinedHtml = juice(html, {extraCss: css});
  $ = cheerio.load(inlinedHtml);
  $('table').attr("border", "0");
  $('table').attr("cellpadding", "0");
  $('table').attr("cellspacing", "0");
  $('a').attr("target", "_blank");
  result = $.html()
  console.log(result);
})();
