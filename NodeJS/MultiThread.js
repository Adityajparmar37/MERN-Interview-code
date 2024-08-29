const { rejects } = require("assert");
const { Worker } = require("worker_threads");

const doFib = async (iterations) => {
  return new Promise((resolve) => {
    const start = Date.now();
    const worker = new Worker("./fib.js", {
      workerData: {
        iterations,
      },
    });

    worker.once("message", (data) => {
      console.log(
        `worker [${worker.threadId}: done in ${
          Date.now() - start
        }]`
      );
      resolve(data);
    });

    worker.once("error", (err) => rejects(err));
  });
};

const main = async () => {
  const start = Date.now();

  const values = await Promise.all([
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
  ]);

  console.log(values);
  console.log(
    `fib done in ${Date.now() - start}ms`
  );
};

main().catch(console.error);
