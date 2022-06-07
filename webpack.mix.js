const mix = require('laravel-mix')
const path = require('path')
/**
 * Configuration
 */
mix.setResourceRoot('./src/')
    .setPublicPath('./bundle/')
    .alias({
        '@': path.join(__dirname, 'src'),
    })

/**
 * Processing
 */
mix.ts('src/main.ts', 'easy-string.js')

/**
 * Beautifying
 */
mix.minify(['bundle/easy-string.js'])
mix.sourceMaps();