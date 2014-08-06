module.exports = function(grunt) {
  grunt.initConfig({
    clean: ['build'],
    watch: {
      css: {
        files: ['css/index.css', 'js/index.js'],
        tasks: ['cssmin', 'uglify']
      },
    },
    cssmin: {
      main: {
        src: ['css/index.css'],
        dest: 'build/index.min.css'
      },
    },
    uglify: {
      build: {
        src: ['js/index.js'],
        dest: 'build/index.min.js'
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
