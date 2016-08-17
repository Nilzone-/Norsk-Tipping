var HOST = 'https://www.norsk-tipping.no/';

module.exports = {
    lotto: HOST + 'api-lotto/getResultInfo.json?drawID=',
    keno: HOST + 'api-keno/getResultInfo.json?drawID=',
    extra: HOST + 'api-extra/getResultInfo.json?drawID=',
    vikinglotto: HOST + 'api-vikinglotto/getResultInfo.json?drawID=',
    joker: HOST + 'api-joker/getResultInfo.json?drawID=',
    eurojackpot: HOST + 'api-eurojackpot/getResultInfo.json?drawID='
};