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
              'gitrepos',
              'gitrepos/**',
              '.gitrepos',
              '.todo',
              '*.sublime-project',
              'readme.*',
              'license.*'  ]

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
        'assets/js/custom.js'
      ]
      out: './js/main.js'

    # Roots Contentful
    # - See https://github.com/carrot/roots-contentful/
    roots_contentful
      access_token: '6c404dda6824966de73ce325c809fe882a7b72d9bca7788fc11909ad06600936'
      space_id: '1h0bn91992u7'
      
      content_types:

        # Core
        global:
          id: 'global'

        # Pages
        page:
          id: 'page'
          template: 'views/_layouts/page.jade'
          path: (e) -> "#{S(e.slug).slugify()}"

  ]

# CSS
# ======================================================================

  # Stylus
  stylus:
    use: [
      rupture()
    ]

  # PostCSS
  postcss:
    use: [
      # normalize(),
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
