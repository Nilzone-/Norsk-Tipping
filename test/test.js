var results = require('../index');

results({
    type: 'vikinglotto',
}).then(function (response) {
    console.log(response);
});