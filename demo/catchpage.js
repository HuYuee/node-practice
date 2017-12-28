
var casper = require('casper').create();
casper.start('http://tinper.org/');

casper.then(function() {
    this.echo('First Page: ' + this.getTitle());
});

casper.run();


