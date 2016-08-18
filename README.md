# Norsk-Tipping

This is an unofficial API for retrieving various lotto result.



Supported gametypes:


- lotto
- keno
- extra
- vikinglotto
- joker
- eurojackpot


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
    fromDrawID: 1050,
    toDrawID: 1051
};
```

