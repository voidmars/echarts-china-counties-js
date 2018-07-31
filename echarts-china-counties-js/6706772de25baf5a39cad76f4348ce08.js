(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('会宁县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"620422","properties":{"name":"会宁县","cp":[105.053358,35.692823],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BCB@@@BABABABABAB@@A@@@@@AAA@A@@@@@@@@A@@A@@@@@@@@@@@@@A@A@A@@@AAAAC@CA@@@A@A@@BA@@@A@A@@@A@AB@@ABA@@@E@EAA@AAA@AA@@AA@AAEA@@@@@E@CB@@@@A@@B@@A@A@ABA@C@A@@@A@@@@BABA@B@@B@@@@A@BBA@@B@BA@@@BBABABA@BBA@AB@@@@@B@@@BA@@@@@@@A@@@BB@@@@@@@@@@@@@BAB@@ABAD@@@@CBCBA@@@AB@@BB@@AB@@@B@@@BA@@B@@@@BB@@@@@B@@@@@@@@@@B@@BA@@B@@@@B@@B@B@@@@@@@BA@@@@@@BBBB@BB@@@@@B@BA@@@ABA@A@C@@BA@A@A@AA@@A@@@A@A@ABCBA@C@A@CBA@ABA@A@A@@AAAEC@@A@BAAA@AA@@AAB@AAAA@@@CA@A@@A@@B@@B@BB@B@B@B@B@@@@@@A@A@ECCAGECA@@AAAAA@C@CDADEBEF@@A@CBABCBA@AB@@ABAB@@A@AB@@AB@@@B@J@F@D@@ABA@A@IDCBG@C@A@CBC@CBA@@B@@CB@@AB@B@@CB@@ABAF@DAB@BA@@@A@A@C@@ACB@BA@EBA@ABA@C@A@A@@@C@CC@@@BABA@CDCBAB@@@@@@@B@@@BAB@@@@@@@B@BABAB@B@@@BBB@@BB@@A@A@C@@@@@ABAB@BB@BBB@@BB@@BAB@@@B@FAB@@@B@@A@A@AB@@@DBB@@@BDBBBA@@BBBB@BB@B@@@B@B@BABAB@B@@@BBB@BB@@@@BAD@@BD@B@@@@D@@@B@BB@BB@@BB@B@B@L@B@B@@BBB@B@@@@@@@B@B@@@B@B@@BD@@@BA@@@@B@@@BBF@B@B@B@@@@@BBD@@@B@D@@@@@BBBBB@B@@@@@@BBDDBB@B@BBBAD@@BB@DBDBDBFBHBDBD@@@BAB@DAB@BBD@@BD@BBBBBB@@BB@DB@BBBBDB@DB@@D@B@BBB@BBBBBBB@BB@@@@BB@B@DDB@@@@@BABA@BDAB@BC@@BAB@@@B@@ABB@@BBBBB@@@D@B@B@BBD@B@B@B@D@DCJ@@@B@@@@AB@B@B@B@@@DABBB@@@B@BBBBD@@DBBBBB@@@DBH@BBB@BAB@@@B@BABCJ@@AB@@A@AB@@ABGF@@@B@@@B@@@BADAD@@@D@BAB@@ADCB@BA@CB@@ABA@@BA@@B@@@@@@AB@@@@@B@BA@@@@BCBED@BA@ABC@E@@@A@@@@AA@@@C@A@@BADA@@@A@E@A@ABABC@@BA@A@ABA@A@A@AAA@@@A@AAA@@@A@@AA@A@@BA@AFA@AB@B@BCBABAB@@A@AB@@A@@BAA@@@@AB@@@@A@@@CD@@CDCDA@A@AB@@@B@B@B@BABA@@BAAA@A@@@@@@D@B@@@@AAA@@@@@@@ABA@@@@@A@AA@@C@@@A@@B@@CL@@@B@@A@@B@@@@@B@F@@@@AD@H@B@J@@A@ADA@@B@@@DA@@BA@CBA@@@ABAB@DAB@@@BA@A@AACBG@ABA@A@@BA@@@@BB@BB@FB@@BBB@D@B@BBBABBBAB@BABADAB@B@@@BAR@@@B@@AD@F@BAB@B@B@B@BAB@B@BAB@B@B@D@F@D@@A@@@E@E@A@AB@@A@A@AAAAAAAA@@@@A@@B@@A@@@A@@BA@@BA@@@A@A@@@AA@@@@AB@BA@@B@@AA@@@AA@A@AA@A@@@@@@A@@@@@A@@@@@A@BBBD@BBDADB@@D@B@D@B@B@@BDA@@@A@A@AAA@A@@@@@A@@@A@@@@@A@@@A@@AA@@@AB@@AAAB@@CBAB@@@D@F@B@D@B@@@@A@@@A@@@A@AD@@A@C@@@A@A@@AC@A@ABAB@BAB@@AA@AA@@@CBAB@@AB@@A@ABAD@@A@A@G@@@@BA@A@C@@@AB@@@@A@A@@@AA@@A@A@A@@BA@AB@@A@AAA@@@CDC@A@AB@@A@@@@B@H@BBF@B@B@@@@B@B@@@BB@@BDBDBF@BBB@@BB@@@@AB@@@@@@@@@BA@@B@@@@@BA@@BAB@@@@A@AB@@A@A@@@A@@@@BA@@@ABA@ABA@A@A@ABA@A@AB@@A@ADABAB@@AB@@@BA@@@@BA@A@A@C@CBA@ABC@@@@BBB@B@B@@@BAB@@@@@@@B@@@@B@@B@@@B@@@@@@@@@@ABCD@BA@@B@@@BCDABA@CDABA@@@A@@@AC@AA@@@A@@@ABGFA@A@A@ABA@@@@@@@AE@AAA@@AAA@@AC@A@@@@@@@@@A@@B@@@@@@@@@@@@@B@@@@@@@@@AA@@B@@BBA@@@@@A@@@@BB@@@@@@@@@@@AD@@@@@@@@@@B@@@A@A@@B@@B@@@AB@B@@A@@@@B@@@@@@@BA@@B@@@@@@@BA@@@CBBBA@@@@@@BA@A@@@A@ABA@@@@@@B@@A@@@@@@@@@A@@@A@@@BB@@@@@B@@A@@@@B@@@B@AAB@@B@AB@@@@B@@@A@@B@@A@@@@@@@@@AB@@@B@B@@@B@@A@@@@@BB@@A@AB@@@B@@ABA@AB@BA@A@@B@@@BABA@AB@@@BA@@@@B@BCB@@@@A@@B@BA@@@C@@@@@A@A@A@A@A@AAA@A@@@CAA@@A@@AA@@@@@@C@CBCBABAD@@@B@@CBA@CDABAB@BAB@@@BA@@@A@@BA@@BAB@@@D@@@@B@@@B@B@B@@@@@B@DB@@@@@BB@@BBBBB@BBAB@BA@B@@B@@@BB@@B@@B@BB@@@B@B@B@@@@D@B@@DBBB@BBB@@@BB@BBB@BBB@B@@B@@BA@@D@B@BABBD@@@BB@BBB@@FB@@@B@@ABBD@B@B@B@@A@CBA@A@AB@@EDA@A@EDA@A@A@@@AB@B@@A@@@@@AAE@A@G@A@A@A@AAA@@@A@A@@@AAA@@@@AA@@@A@@@@@A@CAA@@@@@AB@@A@AAA@@@AA@@@@A@A@@@@B@@A@A@@@AB@@@AA@CA@@A@A@@@@@ABCBA@@BAB@@AH@B@@@@@@A@A@A@A@A@CA@@@@@AC@A@AA@@A@AAABA@ABA@AAAA@@@AA@@@CAEA@AA@AA@A@@A@AAAA@@AA@@A@@AA@AAA@@AB@@A@A@@AAC@A@A@@@@@AAA@E@A@A@C@AA@@A@@@A@A@ABA@@@B@@B@B@@@@A@@@AB@@E@A@@@ECCAAAGACAGAC@CAA@AAAA@B@@CA@@A@@A@@@@@AA@@@@@CCA@A@@@@BC@@@@@A@@@AAA@@@@@ABA@@@@@CBAAABC@A@@@A@@@CB@@A@AAA@@BA@@@@A@@AAA@C@A@AB@@AB@B@@@@ABCB@BBBAF@@@BDB@@BB@BBBBH@BBBBD@@BBBBD@FBHBF@BB@@BB@@@B@@AD@DABAD@DAD@BA@@@@BA@@B@@BB@@@@B@@@@B@@BB@@BA@@BB@@BBDDB@@B@B@@FBBBBB@B@@B@B@@B@BB@BBDB@@@BAB@B@B@D@B@DDBBB@@@@B@BAB@@BB@@@D@B@@B@BB@@@FD@@@@@@BB@@D@F@@BD@@B@@@@BBD@B@@@B@@B@@@@@B@@DBBBBB@B@B@@@@AD@@@@CF@@@B@B@B@@@@@B@B@@@@B@BB@BBBB@@@@@@B@BAFADA@AB@@AB@B@D@@ABA@@@@BAB@D@B@BBBDDBBDBHD@B@@BB@F@F@B@BBH@BBDAFAFDB@@@B@@DBBD@@BB@B@@DB@B@B@@@BA@AB@@@@@B@B@@A@A@AB@@AB@@C@A@G@CDCBA@@AA@A@@@@@@B@B@D@B@BB@BBB@@@BB@DB@@BD@@@@BBB@B@D@@@B@@B@F@BBD@@@B@DFD@@BJBHDD@DDD@FDDD@BDBHDFBDBHBHBF@HBD@JAD@F@FCD@@@DBJBNFFBDBDBHDFBBBDD@@FH@@DB@@@@@B@@FDDD@@B@BAB@@@D@@@BBBA@@B@B@B@B@@AB@B@@@@@@@B@@@B@BBH@H@B@D@BAB@B@@@BBBBF@@@BB@B@@B@B@B@@BB@@BB@B@BBBBB@@BB@B@@@@@B@@B@@B@@@@B@BBB@@@B@@@@B@@@BBB@@BB@BBDBBB@@B@@@B@B@BBB@B@@@B@FB@@B@HFBB@@B@BBB@D@B@@@DBB@B@@BDB@DBB@@BBD@F@BBB@@BB@@BBBFDB@@BBA@B@@@@BB@@B@B@@BBBB@@B@BD@@@@B@@@BB@B@BBB@FBBB@@B@@@BBBF@BB@@@DCB@B@@@B@@B@BBBDF@BB@@BFFBDDBFDHFJHHF@@@@@B@D@@B@BBDB@@@@@B@@@B@@@BDBB@BB@@ABA@BB@@B@@@@@B@BBB@@B@DBB@@BBB@DBBB@@BB@@@B@@@BB@@@DBDBB@BBBBBB@@B@D@@@BA@A@ABA@ABAB@@A@@@E@@@@B@BADADCB@BAD@B@B@@ABABC@A@E@E@ABA@@B@B@B@DBHDFBJDHBFDB@D@B@DBJDD@B@B@B@B@B@D@F@B@DAD@HBD@@@BB@B@B@@@B@D@@BBB@@BB@@D@BBB@@BDBDBDDBBDDB@@H@D@DBHBL@FBH@BBF@FBF@PBD@F@B@FA@AA@@@@A@@@AA@@A@@@@@A@@@AAA@A@@@@@AA@@@@A@@A@@@@A@@@@AAB@@@FBDABBB@@@BBB@@BB@@@BB@@@@B@B@@@B@@@BB@@B@@@@@@B@@BB@BB@@B@@@@DBB@@@B@B@B@B@@@BCDABABA@@B@B@BA@@B@B@BBBB@@BDFDBD@@B@@@B@@@@@BA@@@A@@@A@@A@@AA@CCA@@CA@@@AAA@@@@@AA@@@A@AB@@AHIB@@A@C@@B@@@DBD@@@BA@@@@B@BB@@DAB@D@FA@@B@@@@AB@B@D@BADAFA@@B@H@B@@AB@B@DBB@J@B@D@HADAB@@@JAB@@@@ABB@@B@BA@ABA@@@@@@B@@@DBDB@@@@BA@@DB@@B@@@@B@D@@@BB@DA@@BBBB@@B@BA@@B@@@B@@@BA@A@@@@B@@B@@@BBB@B@@@B@@@BB@@@@B@@@D@B@@ABADCBEDCBAB@B@@@BBB@BB@@BAB@@@B@@A@@B@@BB@@@D@@@BAB@BA@@B@@@BDB@@BBB@@BB@BB@BB@J@B@@@B@BABE@ABABAFEDAD@@@D@BAB@D@HCFC@AB@BBDBB@@BDBB@B@BB@@BB@@@B@@@BAB@@@B@BD@@B@@@@@BF@B@@B@@@DBF@@B@B@BBB@@B@@AFAB@@ABA@@@@B@@A@ABAAA@C@C@E@@@A@@@@B@@@BB@B@B@@@DB@@BBBD@@B@BBBBB@B@@@@@BB@@@@@@@A@@BAB@@@BBB@@A@@BA@@D@B@@@BB@D@@@BB@DB@@B@@@B@@@B@@BB@BB@B@@@B@B@@AB@BB@@BD@@@BBD@@@B@@@BB@@B@@@@@B@@BB@B@BBB@BBB@DBH@B@BB@@B@B@@@ABBBBB@@@BABAF@B@B@@FD@BFDBB@@@@ADA@A@@B@@ADBB@B@@D@@@B@@@BB@A@@B@@@@@@H@D@@@B@@B@B@@@B@@ABA@@B@DA@AB@@A@@BBBB@@B@BBB@DB@@@B@H@D@DABBB@@@BB@B@B@@A@@BABA@@BA@AB@BAD@@@BBB@@@B@@AB@D@@@@@B@@@@@B@@@@B@@B@@@B@B@BBBBBBB@BBB@BB@A@A@@B@@@@@BAB@B@@BB@@@@ABA@A@@DABA@@D@@@BA@@@@BA@@@A@C@A@A@@@A@@@A@A@A@C@AB@BA@@BA@@@A@AB@BA@AB@@AB@@@B@B@B@@A@@@CB@@AD@B@@A@@@CBA@@@E@A@AB@BA@A@A@@BA@@BA@A@E@A@ABA@@@@B@D@BBB@B@B@B@@@FB@@B@DAB@B@@A@A@@B@@@@@@BB@@@@@B@@@B@@ABA@@@A@@BE@@BA@AB@@C@C@@@A@E@@AA@@@C@AB@@@@C@@@@BAD@@AB@@ABCBE@@@E@@@A@AB@@@@@@@B@B@D@@@@@BAB@@A@ABA@ABABABABADA@ABABA@ABA@@@@@@B@@B@@@@@@AB@@@B@@@@@B@@B@@BB@@@@@@@B@@@@@BA@@@AB@@@@@@B@@B@@@@A@@BA@@@@@@@@B@@B@@A@@B@@@BB@@DB@@@@@@@@A@@@@B@@@@@@@BA@@@@B@@@@@@@@@B@@@AB@B@@@@BB@@@@B@@@B@B@@@@@@A@@@@@@@A@A@A@@@A@@@@BABA@A@@BA@@@@@@B@@@B@B@@BB@@@B@BAB@BA@@@@@@@@B@@@B@B@BBB@B@B@@@@@B@@AB@B@@@@ABC@@B@@@B@BD@@BBB@@@@D@B@H@B@B@@BBDBD@BBFF@BFFBD@@@D@@BBB@@B@@B@@@BCB@DABABA@ABABC@@@@B@BABABABCB@@ADABA@ADBB@DB@BB@@@B@BADAJEBAFEBADCDA@AB@@@DA@BHABA@ADAD@B@D@F@F@D@DA@@DAD@BABA@C@CBC@A@ABCBABCBAFADABADCDCBADCBCBABCBC@C@A@C@A@CACAEACAAAAABCAA@C@AAAA@@CAACCC@C@A@ABABABCBABEBA@CBAA@@CAAAC@AACAAA@AAACAA@C@A@EBA@ABC@C@CBCDCDABAJABAHCBCFABCDC@E@A@AAA@CB@@ADBBB@A@@@AAABGBABCBABA@@@@BA@CAC@A@@@CB@@AFIDGBEAC@A@@FCFA@A@C@A@CDADCDADADABADCDA@CA@AA@@AA@AAACCACCKAI@@A@@@A@ABA@A@A@@@@BA@A@@@@@A@BABCBABE@C@AA@@A@@ACAC@CACACACCC@A@A@AAA@@@AA@@@CB@@AA@A@@@@A@@A@@@@A@@@CBA@A@AA@@@@A@@BA@@BAB@@A@@@AA@@@AA@AB@@AAA@@@A@@@@B@@AB@@A@@@AA@@@@@@ABCD@@@BABCBC@@@C@CCA@ACA@@CA@@@A@ABAB@@@BA@@@AA@@A@A@A@A@A@@@@A@@AA@A@A@@A@@B@@@BAB@BA@@BA@@@AAA@@BA@A@C@A@A@@A@A@@AA@AAACC@AAAAA@A@@A@CACCAAA@@CAAA@AAACACEEACAA@@AAA@@@A@@@@B@@AB@@A@@B@@@@ABAB@@A@@@@@AAAAAAA@A@C@A@@AAA@A@C@E@C@A@AAA@@ABAB@B@@AA@A@A@AAA@AA@@BA@@BA@A@@AA@C@A@CAAAAACC@A@CAAA@@@ABA@@AAAAA@@ECACAA@AA@@A@A@A@@@A@@BAB@BA@CBABA@A@@@@A@C@A@A@A@AB@@A@AAA@@@AAA@@@A@AA@@C@@BA@@AA@@@A@@@A@@@@@@BA@A@AA@@@A@A@A@@@@AAA@@ABA@A@@@AAA@@@AA@@@B@@@@A@@@@@@@AA@@@@@A@@A@A@@@A@A@@BA@@B@BA@AA@@A@A@C@ABE@@AA@@@@@A@@@@@@@@@@A@@B@@A@@@A@@@A@@@@A@@@@@@@@@@@AB@@@@@A@@@@@@@A@@@@@A@@A@@A@@@AA@A@@@@@E@CBKBSCM@IBCAEAKAI@AACCAAEAAAAACBA@CDCDAFEDABCBA@A@EBI@GBE@@BE@@@@@@BACAC@ABE@ECCAACBGFIDIBEBCDA@ABCHEHABAHCF@FBBDBBDABCHEHCD@HAFBDBFCHCJCBA@ADA@ADCDG@C@E@AACACAAGBCDABCDADCACCAAAAEAGC@ACABCBCBCDC@ABCDQ@CAAACAA@CDAF@DBDBDB@AAA@@MOAACCACBABCBCBABEBABAFAFFFLFLDFBB@BFDJJDDFDFBD@D@BCBG@EBAB@JJFB@@DABC@G@GBC@C@WBKBCDCBCBCFA@@B@BBLBFCLGBEAC@CAOCI@G@GD@@@F@DDBBFDFBDADABABCH_BEDABABC@AAA@@BAB@AA@@@AA@A@@@@B@@CA@@A@AB@@CAA@AA@B@@A@C@@@C@@@ABE@C@@AA@@@A@BA@@@@@@@A@@@@@@@@@A@@A@@@AA@@@@@@@@AA@@@@@A@@A@A@@@@A@A@A@A@A@@@@@AB@@@@@@A@AA@@@@@@@A@@@@@@@A@@@@A@@@@A@@A@@@@@@@A@@@@@A@@@@@AA@@A@@@@@A@@@@@A@@@@@@@@@A@@@@@AB@@@@@@@B@@A@@B@@@@@@@BA@@@@@@@A@@@@@@B@@A@@@@@@@A@@@@@A@@B@@@@A@@B@@@@@@A@@@@AA@@@@@@@@@@@A@@@@@A@@@@@A@@@@@@@@@@@A@@@A@@@@@@@A@@@@@@B@@A@@@@@A@@@@@@@A@@@@@@B@@@@@B@@@@AB@@@@@B@@@@@B@@@BA@@@@@@@@BA@@@@@C@@@@@A@@B@@A@@@@@@@@@@AA@@A@@A@@@@@@AA@@@@@@@A@@@@@@@AB@@@@A@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@B@@A@@@@@A@@@@@@@A@@@@B@@@@@B@@@@@@@@@@@B@@A@@B@@@@@@@@A@@B@@@@@B@@@B@@A@@@@@@@A@@@A@@@@@@@A@@B@@A@@@@@@@A@@@@@@@A@@B@@@@A@@@@@@B@@A@@@@B@@@B@@@@A@@B@@@B@@@@@@AB@@@@@BA@@@@@A@@@@@@BA@@@@@@@AB@@@@AB@@@@@BA@@@@@A@@@@@@@A@@@@A@@A@@@@@@BA@@@A@@@@@@B@@AB@@@@ADA@@@ABADA@@@AB@@@BADEB@B@BA@@BC@@@@B@@ABAB@BABABA@@@AB@DA@ABEBA@@@@D@JADBB@BB@@B@@@DBB@B@B@B@@@B@@@@@@A@@@ACA@@@A@A@@AC@@AA@@A@EAE@@@AAA@CA@B@@@@AB@@@@CAA@AACBEAA@@@@D@@@@A@@@@@A@@B@@B@@B@@A@@@A@A@AA@@@A@@@@A@@@A@@A@A@A@A@@BA@@@@@@A@@@@@@@C@A@@@@@@@A@@@@@A@@@@@ABA@@@@@A@@@@@@@@@A@@A@@@@A@ABA@@A@@A@A@@@@@A@A@@@AAA@@@C@@@@@@A@@@@@@@@@A@@B@@A@@AA@AB@@A@A@@@AAC@A@AAA@E@A@A@A@C@I@@@A@A@@@C@@AACC@@AA@A@A@@@@@C@@BEBC@A@CAA@A@ABC@A@@@A@A@@@A@@AA@@A@EAECCAAA@@@@AB@@ABC@ABA@A@@BA@@@C@@@AACA@@CAAAA@ADA@@@A@A@CCA@@@@AA@@@C@@@A@AA@@@A@AACBA@CBC@@@@C@ABA@A@@@AAA@@@A@A@@@@@A@ABA@KDA@A@A@A@A@CAAAA@@@@AAABAB@@ABA@@@A@@BABA@@@@AC@A@@BAAA@A@@AA@@A@A@AAAAC@AAA@A@@@@A@AB@@@@A@ABADCBA@@@ABA@ABA@@BA@@@AB@BCB@BCFI@@@@C@AA@@ABCBA@A@AAA@ABABA@@@C@@AEACAC@A@E@@@AA@@@AGAC@AAA@A@C@CBA@A@CDC@C@@BCBA@@BAB@BABA@A@@@A@@AC@A@EA@@C@A@@@@AA@AC@AAACAA@AC@@CBAB@B@BAB@@C@C@C@CBA@A@C@@@@BA@@BA@@BA@A@CAA@C@@AA@@@BA@@@C@A@@AAG@A@A@CA@@@AA@@@@@A@@@CBABA@A@A@CAAAA@@B@@@D@BCD@D@F@BA@@@AAC@AA@@A@ABA@CBA@@@AAA@@A@AA@@A@A@@CAAA@@A@A@@AA@@C@@AAAA@A@@AA@@A@A@@@A@AAAA@@@A@@BA@@@A@@@A@A@@A@@@C@A@C@AAC@ABCBABA@A@A@A@@@@@@BA@CBABABABABCBA@@@CAA@ECEAMECA@@A@ABB@ABABA@C@C@A@AAA@AA@@@C@E@@@ACAAACA@ACA@@CC@C@@@C@C@AA@@AC@A@@AC@@@C@@@A@@@AAAAA@AAA@A@A@CC@AAA@CA@@AA@CA@AA@@A@A@A@@AAACCC@AA@@@A@A@A@A@ABABCDABA@@@C@@BC@AAC@A@CA@@A@GF@BA@@@AA@@EBABCB@BA@@@AACAA@@@A@A@A@@@AAA@@@EAA@AAC@CAABI@A@A@AAAAAACC@A@@@@"],"encodeOffsets":[[107642,36289]]}}],"UTF8Encoding":true});}));