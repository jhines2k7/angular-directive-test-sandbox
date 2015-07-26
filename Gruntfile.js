/**
 * Created by james on 7/26/15.
 */
/**
 * Created by jhines on 7/24/2015.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        html2js: {
            options: {
                base: '',
                module: 'sandbox.templates',
                singleModule: true,
                useStrict: true,
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }
            },
            main: {
                src: ['templates/simple.html'],
                dest: 'templateCache/template-cache.js'
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('cacheTemplates', ['html2js:main']);
    grunt.registerTask('test', ['html2js:main', 'karma:unit']);
};