module.exports = function(grunt) {

  // Auto load all grunt tasks instead of having to update the file to add one.
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'css/style.css' : 'sass/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['components/quote/*.scss', 'components/quote/*.twig'],
        tasks: ['sass', 'drush:cr_all', 'kss']
      }
    },
    kss: {
      options: {
        css: '../css/style.css',
        title: 'Test Component Style Guide',
        builder: 'builder/twig',
        verbose: true
      },
      dist: {
        src: ['components'],
        dest: 'styleguide'
      }
    },
    // Drush calls, we want to be able to see our changes after compile.
    drush: {
      cr_theme_registry: {
        args: ['cr', 'theme-registry']
      },
      cr_css_js: {
        args: ['cr', 'css-js']
      },
      cr_all: {
        args: ['cr', 'all']
      },
      cr_registry: {
        args: ['cr', 'registry']
      }
    }
  });
  //grunt.loadNpmTasks('grunt-kss');
  grunt.loadNpmTasks('grunt-drush');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
}