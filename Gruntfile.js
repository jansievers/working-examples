module.exports = function(grunt) {
    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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

        htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files
                'index.html': 'index.html',     // 'destination': 'source'
              }
            },
        },            

        watch: {
            haml: {
                files: ['*.haml'],
                tasks: ['haml', 'validation'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['css/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            script: {
                files: ['js/*.js'],
                tasks: ['jshint', 'concat', 'uglify'],
                options: {
                    spawn: false
                }
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
            src: '/home/jan/Code/web-playground/working-examples',
            dest: '/working-examples',
            exclusions: ['.sass-cache', 'node_modules', '.ftppass', '.git', 'package.json', 'validation-report.json', 'validation-status.json']
          }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-haml');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['haml', 'validation', 'htmlmin', 'jshint', 'sass', 'concat', 'uglify']);
 
    grunt.registerTask('dev', ['watch']);

    grunt.registerTask('deploy', ['ftp-deploy']);
};
