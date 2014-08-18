/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        meta: {
            banner: "/*=============================================================================\n" +
                "	Author:			David Miranda - @davemiranda								\n" +
                "	License:		MIT (http://opensource.org/licenses/mit-license.php)		\n" +
                "																				\n" +
                "	Description:	KnockoutJS binding to expand and collapse elements.			\n" +
                "===============================================================================\n*/\n"
        },
        uglify: {
            options: {
                banner: "<%= meta.banner %>",
                report: "min"
            },
            dist: {
                files: {
                    "dist/<%= pkg.name %>.min.js": ["js/<%= pkg.name %>.js"]
                }
            }
        },
        jshint: {
            files: ["js/knockout.expander.js"],
            options: grunt.file.readJSON(".jshintrc")
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.registerTask("default", ["jshint", "uglify"]);
};