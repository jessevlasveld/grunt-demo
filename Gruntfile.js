module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
       pkg: pkg,

        shell: {

        },
        sass: {
            options: {
                outputStyle: 'nested',
                imagePath: 'assets/images/',
                precision: 5,
                includePaths: [
                    'components'
                ]
            },
            dev: {
                files: {
                    'public/css/screen.css': 'assets/sass/config.imports.scss'
                }
            }
        },
        pixrem: {
            dist: {
                options: {
                    replace: false
                },
                src: 'public/css/screen.css',
                dest: 'public/css/screen.css'
            }
        },

        uglify: {
            dev: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                files: {
                    'public/js/script.min.js': [
                        // Include:
                        'components/jquery/dist/jquery.js',
                        'assets/js/modules/*.js',
                        'assets/js/script.js'
                    ],
                    'public/js/modernizr.min.js': 'assets/js/modernizr.min.js'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'public/images/'
                }]
            }
        },

        copyFiles: '**/*.{eot,svg,ttf,woff,pdf}',
        copy: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: 'assets/',
                        src: ['<%= copyFiles %>'],
                        dest: 'public/',
                        filter: 'isFile'
                    }
                ]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 9']
            },
            prod: {
                src: 'public/**/*.css'
            },
            dev: {
                src: 'public/**/*.css'
            },
        },

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['assets/sass/**/*.scss'],
                tasks: ['css']
            },
            js: {
                files: ['assets/js/**/*.js'],
                tasks: ['javascript']
            },
            images: {
                files: ['assets/**/*.{png,jpg,gif}'],
                tasks: ['images']
            },
            copy: {
                files: ['assets/<%= copyFiles %>'],
                tasks: ['copy']
            }
        }
    });

    grunt.registerTask('css', [
        'sass',
        'autoprefixer:dev',
        'pixrem'
    ]);

    grunt.registerTask('javascript', [
        'uglify:dev'
    ]);

    grunt.registerTask('images', [
        'imagemin'
    ]);

    grunt.registerTask('dev', [
        'css',
        'javascript',
        'images',
        'copy'
    ]);

    grunt.registerTask('default', ['dev', 'watch']);
};
