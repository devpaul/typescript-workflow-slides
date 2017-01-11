module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-devserver');

	grunt.initConfig({
		clean: {
			resources: {
				src: [ 'resources/*.css' ]
			}
		},

		devserver: {
			present: {
				options: {
					port: 8765
				}
			}
		},

		'gh-pages': {
			publish: {
				options: {
					base: '.',
					push: true
				},

				src: [ 'index.html', 'favicon.ico', 'images/**/*', 'resources/**/*.css', 'video/**/*',
					'bower_components/**/*' ]
			}
		},

		stylus: {
			resources: {
				files: {
					'resources/main.css' : 'resources/main.styl'
				}
			}
		},

		watch: {
			stylus: {
				files: 'resources/**/*.styl',
				tasks: [ 'stylus' ],
				options: {
					interrupt: true
				}
			}
		}
	});

	grunt.registerTask('default', [
		'clean',
		'stylus'
	]);

	grunt.registerTask('dev', [
		'clean',
		'stylus',
		'watch'
	]);

	grunt.registerTask('serve', [
		'stylus',
		'devserver'
	]);

	grunt.registerTask('publish', [ 'gh-pages:publish' ]);
};
