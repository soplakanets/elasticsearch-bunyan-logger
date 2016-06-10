# elasticsearch-bunyan-logger
[![Build Status](https://travis-ci.org/soplakanets/elasticsearch-bunyan-logger.svg?branch=master)](https://travis-ci.org/soplakanets/elasticsearch-bunyan-logger) [![Dependency Status](https://david-dm.org/soplakanets/elasticsearch-bunyan-logger.png)](https://david-dm.org/soplakanets/elasticsearch-bunyan-logger)
![Badge](https://img.shields.io/badge/has%20nifty%20badges-yes-green.svg)

[Bunyan](https://github.com/trentm/node-bunyan) logging adapter for [elasticsearch-js](https://github.com/elastic/elasticsearch-js).
A convenience library that uses default implementation from [ElasticSearch lib docs](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/logging.html).

## Usage
```javascript
var Logger = require('elasticsearch-bunyan-logger')();
var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({ log: Logger });
```

You may also pass a configured bunyan Instance
```javascript
var bunyan = require('bunyan')
var bunyanLogger = require('elasticsearch-bunyan-logger');
var elasticsearch = require('elasticsearch');

var logger = bunyan.createLogger({name: 'my-elasticsearch-logger', level: 'error'});
var BunyanLogger = bunyanLogger(logger);
var client = new elasticsearch.Client({ log: BunyanLogger });
```
