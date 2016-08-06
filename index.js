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
    Inky = require('inky').Inky,
    minify = require('html-minifier').minify,
    styles, html, inlinedHtml, $, result, css, inky, options, minifiedHtml;

  options = {};

  // Render SCSS to CSS
  styles = sass.renderSync({
    file: 'source/scss/main.scss',
    outputStyle: 'compressed',
  });
  css = styles.css.toString();

  // Render PUG to HTML
  html = pug.renderFile('source/pug/first.pug');

  // Apply Inky on Previous HTML
  $ = cheerio.load(html);
  inky = new Inky();
  html = inky.releaseTheKraken($);

  // Apply the Styles Inline
  inlinedHtml = juice(html, {extraCss: css});

  // Add Additional attributes to HTML
  $ = cheerio.load(inlinedHtml);
  $('table').attr("border", "0");
  $('table').attr("cellpadding", "0");
  $('table').attr("cellspacing", "0");
  $('a').attr("target", "_blank");

  // Save the File
  minifiedHtml = minify($.html(), {
    minifyCSS: true,
    collapseWhitespace: true
  });
  console.log(minifiedHtml);
})();
