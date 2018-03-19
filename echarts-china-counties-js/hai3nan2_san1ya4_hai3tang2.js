(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('海棠区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"460202","properties":{"name":"海棠区","cp":[109.752569,18.400106],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FBFD@DABABCF@DBBB@BBBB@B@B@B@BH@B@D@@@@LAD@B@JFHFHDDB@FEDC@@FADCDE@@BB@HAJABAF@P@BDL@BBD@HFJDFDDDD@@@@BBB@B@D@BAB@@@@@BB@BABABAD@B@@@B@DBBBBAB@BAB@@@@@BBF@@@B@@@@@B@@B@H@B@D@NHFD@BBBBABA@@FBHDHBD@BBDRBD@L@@@D@B@B@BBB@AD@B@DBDD@ABADABAD@@@BABABEB@@A@KBA@@@@@@AAAAA@@CACACAE@ABABEBEDCBADAJEH@J@D@BCFGDEFCBCBEDI@EAEAA@@CC@A@@AA@CAA@A@@@@@@@A@E@GACACAAA@ICI@A@GAA@AC@E@E@ABCBC@ADC@CBEBI@EBAAAKCFGFBB@DMXUEQICCEOAEAQC[IYMaC]CgOBGBA@CBEAE@CACBABCBACCACDE@GAE@ECCCC@C@C@CBABADADA@C@CAC@A@@DABC@E@CBABCB@ACA@BC@A@AACAA@CBABCBEBE@EACBABCDCB@F@D@B@BDFBDCBC@@D@@ADA@CB@BADBFDB@F@BDF@D@DAFAD@BDDD@B@DDDDBDDDBB@DCDAB@DAD@F@B@DCBBBBBDDDBDB@DABABABC@@BBB@DABADC@ABBD@DAB@DBBB@AB@DBDBBDBBB@D@BADC@C@@BADC@A@BBBBBBDBBB@DNCLDDJUBB@DBDBDDADCBCDAD@DAD@B@B@BBD@@B@BBFBB@B@@@@ADC@@DA"],"encodeOffsets":[[112310,18836]]}}],"UTF8Encoding":true});}));