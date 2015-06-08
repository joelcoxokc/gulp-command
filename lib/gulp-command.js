(function(){


  /*
   * gulp-command
   * https://github.com/JoelCoxOKC/gulp-command
   *
   * Copyright (c) 2014 joelcoxokc
   * Licensed under the MIT license.
   */

  'use strict';

  var Option = require('./Option');
  var _ = require('lodash')
  var argv   = require('minimist')(process.argv.slice(2));

  module.exports = function gulpCommand(gulp) {

    var gulpInst = gulp || require('gulp');
    gulpInst.Gulp.prototype.options = {};
    // gulpInst.Gulp.prototype.flags = {};
    gulpInst.Gulp.prototype.option = function(task, flags, description, fn, defaultValue){
      var _this = this
        , option = new Option(task, flags, description)
        , oname = option.name()
        , name = camelcase(oname);


      // default as 3rd arg
      if (typeof fn != 'function') {
        defaultValue = fn;
        fn = null;
      }
      if(!this.flags){
        this.flags ={};
      }
      // preassign default value only for --no-*, [optional], or <required>
      if (false == option.bool || option.optional || option.required) {
        // when --no-* we make sure default is true
        if (false == option.bool) defaultValue = true;
        // preassign only if we have a default
        if (undefined !== defaultValue) _this.flags[name] = defaultValue;
      }
      _this.options[oname] = option;
      // register the option

      _this.on('start', function (){
        if(fn) parseArgs = fn;
        var val;
        if(option.task && option.task !== this.seq[0]){
          return;
        }
        if(argv[option.shortName]){
          val = parseArgs(argv[option.shortName]);
        }
        if(argv[option.longName]){
          val = parseArgs(argv[option.longName]);
        }
        _this.flags[option.longName] = val;
      });

      function parseArgs(thing){
        var parsed;
        if(_.isString(thing)){
          if(thing.split(',').length > 1){
            parsed = thing.split(',');
          } else {
            parsed = thing;
          }
        } else {
            parsed = thing;
        }
        return parsed;
      }
      return this;
    }
  };
/**
 * Camel-case the given `flag`
 *
 * @param {String} flag
 * @return {String}
 * @api private
 */

function camelcase(flag) {
  return flag.split('-').reduce(function(str, word) {
    return str + word[0].toUpperCase() + word.slice(1);
  });
}

})();
