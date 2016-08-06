# Email Template Generator

Email Template Generator. Generate responsive & maintainable unified templates for Sendgrid, Mandrill, etc. Using SASS, Pug and common layout.

![Email Template Generator](https://raw.githubusercontent.com/dhilipsiva/email-template-generator/master/sample.png)

## Usage

1. Fork / Clone this repo
1. Go to repo directory, and type `npm install`
1. Create your `pug` templates in `source/pug/private` (this is git ignored directory). You can use `SAMPLE.pug` that is found in the same folder for reference
1. To make style changes, modify `source/scss/variables.scss` (or any together files in that directory)
1. To make layout changes, modify `sources/pug/layout.pug`
1. Finally, you need to run `node generate.js` to generate your templates (Will be found at `dist` folder - which again, is git ignored). Now you have responsive, maintainable, inlined & beautiful templates to use with your Sendgrid, Mandrill, Mailchimp, Mailgun, etc -  which will be compatible with virtually all mail clinets.


## References

1. [SASS](http://sass-lang.com/) & [node-sass](https://github.com/sass/node-sass)
1. [Pug](https://github.com/pugjs/pug)
1. [Inky](http://foundation.zurb.com/emails.html)
1. [Cheerio](http://cheerio.js.org/)
1. [Minify](https://github.com/kangax/html-minifier)
1. [Juice](https://github.com/Automattic/juice)

## Thanks
[leemunroe/responsive-html-email-template](https://github.com/leemunroe/responsive-html-email-template)
