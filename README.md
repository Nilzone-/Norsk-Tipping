# Norsk-Tipping

This is an unofficial API for retrieving various lotto result.



Supported gametypes:


- lotto
- keno
- extra
- vikinglotto
- joker
- eurojackpot


## Installation

```
npm install norsk-tipping
```


## Usage

Example usage for getting latest result for a given game:

```javascript
var results = require('norsk-tipping');
var options = {
    type: 'vikinglotto'
};

results(options)
    .then(function (response) {
        console.log(response);
    }).catch(function (err) {
        console.log(err);
    });
```


Retrieve a range of draw results? Just add the following to the options object:

```javascript
var options = {
    type: 'vikinglotto',
    range: {
        fromDrawID: 1050,
        toDrawID: 1051
    }
};
```

If you don't want to pass in a specific range between two ID's, it's possible to get the X latest draw-results.

Modify the options object to the following:

```javascript
var options = {
    type: 'vikinglotto',
    fetchResult: 10
};
```

If both a range-object and fetchResult is passed in to the options-object, the range will be used. 

