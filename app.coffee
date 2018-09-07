autoprefixer = require 'autoprefixer'
contentful = require 'contentful'
css_pipeline = require 'css-pipeline'
js_pipeline = require 'js-pipeline'
marked = require 'marked'
moment = require 'moment'
roots_contentful = require 'roots-contentful'
rupture = require 'rupture'
_ = require 'underscore'
_str = require 'underscore.string'

S = require 'string'

dotenv = require 'dotenv'
dotenv.config()

# PostCSS
postcss = require 'postcss'
mqpacker = require 'css-mqpacker'
normalize = require 'postcss-normalize'

# Vars
isDev = process.env.CFUL_ENV == "development"
isProd = process.env.CFUL_ENV == "production"
isPreview = process.env.CFUL_ENV == "preview"


# Roots extensions
# ======================================================================

module.exports =
  open_browser: false

  ignores: [
    '_*/**'
    '**/_*'
    '**/_*/**'
    '*.sublime-project'
    '.editorconfig'
    '.env'
    '.gitignore'
    '.gitrepos'
    '.todo'
    'assets/data'
    'assets/data/**.json'
    'gitrepos'
    'gitrepos/**'
    'license.*'
    'package-lock.json'
    'readme.*'
    'ship.*conf'
  ]

  extensions: [

    css_pipeline
      files: [
        './assets/css/main.*'
        './assets/css/_vendors/slick.styl'
      ]
      postcss: true

    js_pipeline
      files: [
        'assets/js/jquery.js'
        'assets/js/velocity.js'
        'assets/js/velocity.ui.js'
        'assets/js/picturefill.js'
        'assets/js/lazysizes.js'
        'assets/js/slick.js'
        'assets/js/clipboard.js'
        'assets/js/custom.js'
      ]
      out: './js/main.js'

    # Roots Contentful
    # - See https://github.com/carrot/roots-contentful/
    roots_contentful
      access_token: if isProd then process.env.CFUL_LIVE_KEY else process.env.CFUL_PREVIEW_KEY
      space_id: process.env.CFUL_SPACE_ID
      preview: if isProd then false else true

      content_types:

        # Core
        contentVars:
          id: 'contentVars'
        global:
          id: 'global'
        navigation:
          id: 'navigation'

        # Pages
        page:
          id: 'page'
          template: 'views/_layouts/page.jade'
          path: (e) -> "#{S(e.slug).slugify()}"
        post:
          id: 'post'
          template: 'views/_layouts/post.jade'
          path: (e) -> "blog/#{S(e.slug).slugify()}"
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
    sourcemap: if isProd then false else true

  # Local server settings (gh.com/caret/charge)
  server:
    "clean_urls": true

# Locals
# ======================================================================

  locals:

    # Generates function to render markdown from Contentful
    # https://github.com/carrot/roots-contentful/issues/13
    markdown:
      marked.setOptions({
        gfm: true,
        smartLists: true,
        smartypants: false
      });

    moment: moment
    _: _
    _str: _str
