module.exports = function(grunt) {
    // All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        jasmine: {
            // Simple test
            test: {
                src: [
                    'js/main.js'
                ],
                options : {
                    specs : 'js-test/*.js'
                }
            },
            // Libraries
            options : {
                vendor: [
                    'js/libs/jquery.js',
                    'js/libs/jquery.easing.js',
                    'js/libs/jquery.fancybox.js'
                    //'<%= pathApplication %>/js/lib/jasmine/jasmine-jquery.js'
                ]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/build/main.css': 'css/main.sass'
                }
            } 
        },
        haml: {
            dist: {
                files: {
                    'index.html': 'index.haml'
                }
            }
        },

        concat: {
            dist: {
                src: [
                    'js/libs/jquery.js', // All JS in the libs folder
                    'js/libs/jquery.easing.js',
                    'js/libs/jquery.fancybox.js',
                    'js/libs/underscore.js',
                    'js/main.js'  // This specific file
                ],
                dest: 'js/build/production.js',
            }
        },
        uglify: {
            build: {
                src:  'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        htmlmin: {
            dist: {
              options: {
                removeComments: true,
                collapseWhitespace: true
              },
              files: {
                'index.html': 'index.html',
              }
            },
        }, 

        jsonlint: {
            sample: {
                src: ['content/working-examples.json']
            }
        },

        watch: {
            json: {
                files: ['content/*.json'],
                tasks: ['newer:jsonlint']
            },
            haml: {
                files: ['*.haml'],
                tasks: ['newer:haml', 'validation', 'htmlmin']
            },
            css: {
                files: ['css/**/*.sass'],
                tasks: ['sass']
            },
            script: {
                files: ['js/*.js'],
                tasks: ['newer:jshint', 'newer:concat', 'newer:uglify']
            }
        },
        validation: {
            files: {
                src: ['*.html']
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'js/main.js']
        },
        'ftp-deploy': {
          build: {
            auth: {
              host: 'www.jan-christoph-sievers.de',
              port: 21,
              authKey: 'key1'
            },
            src: '/home/jan/Code/working-examples',
            dest: '/working-examples',
            exclusions: [
                '.idea',
                '.vagrant',
                '.sass-cache',
                'node_modules',
                '.ftppass',
                '.git',
                'package.json',
                'validation-report.json',
                'validation-status.json'
            ]
          }
        }
    });

    // Where we tell Grunt we plan to use this plug-in.
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['jsonlint', 'haml', 'validation', 'htmlmin', 'jshint', 'sass', 'concat', 'uglify']);
 
    grunt.registerTask('dev', ['watch']);

    grunt.registerTask('deploy', ['ftp-deploy']);

    grunt.registerTask('test', ['jasmine']);
};
