const rating = [5, 4, 6];
let sum = 0;

const sumFun = async (a, b) => a + b;

rating.forEach(async (rating) => {
    sum = await sumFun(sum, rating);
})

console.log(sum);