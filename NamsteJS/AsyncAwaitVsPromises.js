const p = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise resolved");
  }, 5000);
});

// Normal Promise

// async function getData() {
//     p.then((res) => console.log(res));
//     console.log("Hello SociaPilot");
// }

// async await

async function getData() {
  console.log("Hi");
  const res = await p;
  console.log("Hello SociaPilot");
  console.log(res);
}

console.log("Bye");

getData();
