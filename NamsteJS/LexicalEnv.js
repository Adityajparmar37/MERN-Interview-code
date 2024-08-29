//

{
  var y = 30;
}

function a() {
  var x = 20;
  c();
  function c() {
    console.log(x);
    console.log(b);
  }
}
// console.log(x);
console.log(y);
const b = 100;
a();
