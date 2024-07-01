//วีรวิชญ์ ยิ่งศิริธัญรัฐ 660612157
function arrayStringify(a) {
    var Ouk = "";
    for (var i = 0; i < a.length; i++) {
        Ouk += a[i];
    }
    return Ouk;
}
var c1 = [1, 2, 3];
var c2 = [10, 9, 8, 7, 6, 5];
var c3 = [];
console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));
module.exports = arrayStringify;
