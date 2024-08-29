function PlaceOrdered(n) {
  return new Promise((res, rej) => {
    console.log(
      "1st promise: Number of item =  ",
      n
    );
    res(n);
  });
}

function ProcceedToPayement(data) {
  return new Promise((res, rej) => {
    console.log(
      "2nd Promise: Total amount = ",
      data * 100
    );
    res(1);
  });
}

function DisplayPayement(data) {
  return new Promise((res, rej) => {
    if (data) {
      console.log("success");
      res("Success");
    } else {
        console.log("Error occured");
        rej(0);
    }
  });
}

// const result = PlaceOrdered();
// const result2 = ProcceedToPayement(result);
// console.log(result2);

PlaceOrdered(5)
  .then(ProcceedToPayement)
  .then(DisplayPayement)
  .catch((err) =>
    console.log("Error occured", err)
  )
  .finally(() => {
    console.log("Finally block");
  });
