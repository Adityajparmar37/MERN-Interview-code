var q = 8;
function x() {
  let a = 7;

  return function y() {
    console.log(a, q);
    r();
    function r() {
      console.log(q);
    }
  };
}

var z = x();
console.log(z);
z();
