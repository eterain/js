var Iconv  = require('iconv').Iconv;
// EUC-KR -> UTF-8
var iconv = new Iconv('EUC-KR', 'UTF-8');
console.log(iconv.convert('Hello Iconv가나다라마'));