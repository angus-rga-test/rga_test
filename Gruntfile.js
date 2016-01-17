module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            css: {
                files: [
                    'scss/*.scss'
                ],
                tasks: ['sass']
            },
            js: {
                files: [
                    'javascript/*.js',
                    'javascript/**/*.js'
                ],
                tasks: ['uglify']
            }
        },
        uglify: {
            options: {
                //mangle: true,
                mangle: false,
                beautify: true
            },
            modules: {
                files: {
                    'main.min.js': [
                        'javascript/handies.js',
                        'javascript/backend_models.js',
                        'javascript/mstk3.js',
                        'javascript/modals.js',
                        'javascript/**/*.js'
                    ]
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'style.css': 'scss/style.scss'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Load the watch plugin
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Load the SASS plugin
    grunt.loadNpmTasks('grunt-sass');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', ['sass']);
}