var request = require('request');
var games = require('./endpoints');

module.exports = results;

function toJSON(response) {
    var data = response.toString(),
        matches = (data.match(/(^{[\s\w\W]+}$)/gm) || []).join(''),
        result = matches.length === 0 ? '[]' : matches;

    return JSON.parse(result);
}

function requestLatestdrawId(url) {
    return new Promise(function (resolve, reject) {
        request(url, function (error, response, body) {
            if (!error) {
                var data = toJSON(body);
                latestDrawID = data.drawID;

                resolve(latestDrawID);
            } else {
                reject(error);
            }
        });
    });
}


function createPromises(numberOfReqs, fromDrawID, endpoint) {
    if(typeof numberOfReqs !== 'number') {
        throw new TypeError('Expected variable of type: Number');
    }
    
    var promises = Array(numberOfReqs)
        .fill(fromDrawID)
        .map(function (val, index) {
            return new Promise(function (resolve, reject) {
                var url = fromDrawID === 0 ? endpoint : endpoint + (fromDrawID + index);

                request(url, function (error, response, body) {
                    if (error) {
                        return reject(error);
                    }

                    var data = toJSON(body);
                    resolve(data);
                });
            });
        });

    return promises;
}

function results(options) {
    var endpoint,
        fromDrawID = 0,
        toDrawID = 0,
        numberOfReqs = 1;

    if (!options || !options.type) {
        throw new Error('Expected option-object with key: type');
    }

    if (options.range && (!options.range.fromDrawID || !options.range.toDrawID)) {
        throw new Error('If a range-object is present within the options-object, it must contains both fromDrawID and toDrawID properties');
    }

    endpoint = games[options.type] || games['vikinglotto'];


    return requestLatestdrawId(endpoint)
        .then(function (id) {

            if (options.range) {
                fromDrawID = options.range.fromDrawID;
                toDrawID = options.range.toDrawID;
                numberOfReqs = (toDrawID - fromDrawID) + 1;

            } else if (options.fetchResult) {
                var count = options.fetchResult
                fromDrawID = (id - count) + 1;
                numberOfReqs = count;
            }

            var promises = createPromises(numberOfReqs, fromDrawID, endpoint);
            return Promise.all(promises);

        })
        .catch(function (err) {
            console.log('Something went wrong... ' + err);
        });
}