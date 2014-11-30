# gulp-command 

>Use Commander-CLI options in Gulp for passing Command line flags

Gulp Command is currently working, However it does not provide all the necessary options quite yet.

[![Build Status](https://secure.travis-ci.org/JoelCoxOKC/gulp-command.png?branch=master)](http://travis-ci.org/JoelCoxOKC/gulp-command) [![NPM version](https://badge-me.herokuapp.com/api/npm/gulp-command.png)](http://badges.enytc.com/for/npm/gulp-command) 

## Getting Started
Install the module with: `npm install gulp-command`


Her is an example of how to use gulp-command

```javascript
var gulp        = require('gulp');
var gulpCommand = require('gulp-command')(gulp);

gulp
    .option('<related-task>', '-f, --flag', 'Description', 'callback')

```

 - Related-Task: optional

- -f, --flag: required (both short and long flag are required comma Separated);
 - description: required
 - Callback: optional

**If No Related task is specified, the commands can apply to all tasks**

However, You still need to pass ```null``` If you are not using a task


```javascript
gulp
    .option(null, '-f, --flag', 'Description', 'callback')
```

##How to access the flags!
As an example, If I used the following flags. 
```
gulp build --thing=awesome -s soo -s totally -s cool
```

After passing an option property, within then gulp task, you can simply 
```javascript 
gulp
    .option('build', '-t, --thing', 'Awesome Thing')
    .option('build', '-s, --sweetness', 'So Totally Cool')
    .task('build', function(){
        console.log(this.flags)
        => {t:'awesome', sweetness: ['so', 'totally', 'awesome']};
    });
```

If we were to run the same command, but under the default task, we would get the following;
```
gulp default --thing=awesome -s soo -s totally -s cool
```

```javascript
gulp
    .task('default', function(){
        console.log(this.flags)
        => {}
    });

gulp
    .option('build', '-t, --thing', 'Awesome Thing')
    .option('build', '-s, --sweetness', 'So Totally Cool')
    .task('build', function(){
        
    });
```

## Docs

* documentation - Comming Soon.
* support - open an issue [here](https://github.com/JoelCoxOKC/gulp-command/issues).

## License
[MIT](http://opensource.org/licenses/MIT) © 2014, joelcoxokc