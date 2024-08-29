function getArea(w, h) {
  if (isNaN(w) || isNaN(h)) {
    throw "Parameters are not Number";
  }
}

try {
  getArea(10, "A");
  //   process.exit(1);
} catch (e) {
  console.log(e);
} finally {
  console.log("This will always be excuted");
}
