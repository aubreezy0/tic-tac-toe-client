browser-template
A template for starting front-end projects. Webpack for require system, build pipeline, and development server. Boostrap and Handlebars.js included. No front-end frameworks included.

Structure
Developers should store JavaScript files in assets/scripts. The "manifest" or entry-point is assets/scripts/index.js. In general, only application initialization goes in this file. It's normal for developers to start putting all code in this file, but encourage them to break out different responsibilities and use the require syntax put references where they're needed.

Developers should set apiUrls.production and apiUrls.development in config/environment.js. With apiUrls set, developers may rely on apiUrl as the base for API URLs.

Developers should store styles in assets/styles and load them from assets/styles/index.scss. Bootstrap version 3 is included in this template.

Developers should use getFormFields [https://git.generalassemb.ly/ga-wdi-boston/browser-template/blob/master/get-form-fields.md] to retrieve form data to send to an API.

To deploy a browser-template based SPA, run grunt deploy.

Tasks
Developers should run these often!

grunt nag or just grunt: runs code quality analysis tools on your code and complains
grunt make-standard: reformats all your code in the JavaScript Standard Style
grunt <server|serve|s>: generates bundles, watches, and livereloads
grunt test: runs any automated tests, depends on grunt build
grunt build: place bundled styles and scripts where index.html can find them
