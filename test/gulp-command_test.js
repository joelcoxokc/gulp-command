/*
 * gulp-command
 * https://github.com/JoelCoxOKC/gulp-command
 *
 * Copyright (c) 2014 joelcoxokc
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var gulpCommand = require('../lib/gulp-command.js');

describe('gulpCommand', function(){
    it('is defined', function(){
      gulpCommand.should.be.a('function');
    });

});
