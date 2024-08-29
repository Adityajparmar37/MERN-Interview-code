function PlaceOrdered() {
  return new Promise((res) => {
    setTimeout(() => {
    //   console.log("1st promise: Order placed");
      res("Getting placed 4 items");
    }, 1000);
  });
}

function ProcceedToPayement(data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
    //   console.log("2nd promise: ", data);
      rej("Payment failed for: " + data);
    }, 500);
  });
}

function DisplayPayement(data) {
  return new Promise((res) => {
    setTimeout(() => {
    //   console.log("3rd promise: ", data);
      res("Displaying payment info for: " + data);
    }, 1500);
  });
}


/// 1) => promise.all()

// async function handleAll() {
//   try {
//     const results = await Promise.all([
//       PlaceOrdered(),
//       ProcceedToPayement(),
//       DisplayPayement(),
//     ]);
//     console.log("All resolved:", results);
//   } catch (error) {
//     console.log("Error in Promise.all:", error);
//   }
// }
// handleAll();





/// 2) => Promise.allSettled()

// async function handleAllSettled() {
//   const results = await Promise.allSettled([
//     PlaceOrdered(),
//     ProcceedToPayement(),
//     DisplayPayement(),
//   ]);
    
//   console.log("All settled:", results);
// }
// handleAllSettled();




/// 3) => Promise.race()


// async function handleRace() {
//   try {
//     const result = await Promise.race([
//       PlaceOrdered(),
//       ProcceedToPayement(),
//       DisplayPayement(),
//     ]);
//     console.log(
//       "First resolved/rejected:",
//       result
//     );
//   } catch (error) {
//     console.log("Error in Promise.race:", error);
//   }
// }
// handleRace();



/// 4) => Promise.any()

async function handleAny() {
  try {
    const result = await Promise.any([
      ProcceedToPayement(),
      PlaceOrdered(),
      DisplayPayement(),
    ]);
    console.log("First fulfilled:", result);
  } catch (error) {
    console.log(
      "All promises were rejected:",
      error.errors
    );
  }
}
handleAny();
