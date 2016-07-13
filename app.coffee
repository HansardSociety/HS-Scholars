# Modules
# ======================================================================

autoprefixer      = require 'autoprefixer'
contentful        = require 'contentful'
css_pipeline      = require 'css-pipeline'
js_pipeline       = require 'js-pipeline'
marked            = require 'marked'
moment            = require 'moment'
roots_contentful  = require 'roots-contentful'
rupture           = require 'rupture'
S                 = require 'string'

# PostCSS
postcss           = require 'postcss'
mqpacker          = require 'css-mqpacker'
normalize         = require 'postcss-normalize'

# Roots extensions
# ======================================================================

module.exports =
  open_browser: false

  ignores: [  'README.md',
              'LICENSE.md',
              '_*/**',
              '**/_*',
              '**/_*/**',
              'assets/data',
              'assets/data/**.json',
              '.gitignore',
              'ship.*conf',
              'gh_modules'  ]

  extensions: [

    css_pipeline
      files: [
        './assets/css/main.*'
        './assets/css/_vendors/flickity.css'
      ]
      postcss: true

    js_pipeline
      files: [
        'assets/js/jquery.js',
        'assets/js/velocity.js',
        'assets/js/velocity.ui.js',
        'assets/js/flickity.js',
        'assets/js/picturefill.js',
        'assets/js/fitvids.js',
        'assets/js/custom.js'
      ]
      out: './js/main.js'

    # Roots Contentful
    # - See https://github.com/carrot/roots-contentful/
    roots_contentful
      access_token: '4d4d0b62eddf02f5b48caa23ef7c04e42fa6f5ddb8e07d8ef71b52339ff9cfab'
      space_id: 'u1rlvvbs33ri'
      
      content_types:
        
  ]

# CSS
# ======================================================================

  # Stylus
  stylus:
    use: [
      rupture()
    ]
    # sourcemap: true

  # PostCSS
  postcss:
    use: [
      normalize(),
      autoprefixer({ browsers: ['last 2 versions'] }),
      mqpacker()
    ]

# HTML
# ======================================================================
  
  # Jade
  jade:
    pretty: false

# JS
# ======================================================================

  # Coffeescript
  'coffee-script':
    sourcemap: true

  # Local server settings (gh.com/caret/charge)
  server:
    "clean_urls": true

# Locals
# ======================================================================

  locals:

    # Generates function to render markdown from Contentful
    # - See https://github.com/carrot/roots-contentful/issues/13
    markdown: marked.setOptions({
        gfm: true,
        smartLists: true
      });

    moment: moment
