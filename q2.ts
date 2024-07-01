//วีรวิชญ์ ยิ่งศิริธัญรัฐ 660612157
function arrayStringify(a) {
  var Ouk = "";
  for(let i = 0;i< a.length;i++){
  Ouk += a[i];
  }
  return Ouk;
  }
  
  
  
  const c1 = [1, 2, 3];
  const c2 = [10, 9, 8, 7, 6, 5];
  const c3 = [];
  
  console.log(arrayStringify(c1));
  console.log(arrayStringify(c2));
  console.log(arrayStringify(c3));
  
  module.exports = arrayStringify;
  