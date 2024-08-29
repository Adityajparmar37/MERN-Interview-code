const makeBurger = (nextStep) => {
    getBread(nextStep, (bread) => {
        getCheese(bread, (cheese) => {
            getVeggies(bread, cheese, (veggies) => {
                getPatties(bread, cheese, veggies, (patties) => {
                    console.log("Cook burger");
                });
            });
        });
    });
};

// Example of how the functions could be implemented
const getBread = (type, callback) => {
    console.log(`Getting ${type} bread`);
    callback(`${type} bread`);
};

const getCheese = (bread, callback) => {
    console.log(`Adding cheese to ${bread}`);
    callback(`${bread} with cheese`);
};

const getVeggies = (bread, cheese, callback) => {
    console.log(`Adding veggies to ${bread} with cheese`);
    callback(`${bread} with cheese and veggies`);
};

const getPatties = (bread, cheese, veggies, callback) => {
    console.log(`Adding patties to ${bread} with cheese and veggies`);
    callback(`${bread} with cheese, veggies, and patties`);
};

// Call the function
makeBurger("Multigrain");
