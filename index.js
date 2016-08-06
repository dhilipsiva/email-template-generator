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
    fs = require('fs'),
    juice = require('juice'),
    cheerio = require('cheerio'),
    Inky = require('inky').Inky,
    minify = require('html-minifier').minify,

    sourceDir = "source/",
    distDir = "dist/",
    scssDir = sourceDir + "scss/",
    scssMain = scssDir + "main.scss",
    pugDir = sourceDir + "pug/",
    privateDir = pugDir + "private/",

    styles, html, inlinedHtml, $, result, css, inky, minifiedHtml, files, file,
    i, len, srcPath, targetPath;


  // Render SCSS to CSS
  styles = sass.renderSync({
    file: scssMain,
    outputStyle: 'compressed',
  });
  css = styles.css.toString();

  // List files
  files = fs.readdirSync(privateDir);
  for (i = 0, len = files.length; i < len; i++) {
    file = files[i];
    if (!file.endsWith(".pug")) {
      continue;
    }
    srcPath = privateDir + file;
    targetPath = distDir + file.replace(".pug", ".html");
    // Render PUG to HTML
    html = pug.renderFile(srcPath);

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

    // Minify the File
    minifiedHtml = minify($.html(), {
      minifyCSS: true,
      collapseWhitespace: true
    });

    // Save the file
    fs.writeFile(targetPath, minifiedHtml, function(err) {
      if(err) {
        console.log(err);
      }
      else{
        console.log("Template generated: " + targetPath);
      }
    });
  }
})();
