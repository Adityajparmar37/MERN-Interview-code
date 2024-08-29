async function PlaceOrdered(n)
{
    return new Promise((res, rej) => {
        console.log("Promise 1st: Ordered placed for items = ", n);
        res(n)
    });
}

async function ProcceedToPayement(data) {
    return new Promise((res, rej) => {
        console.log("Promise 2nd: Total Pay is = ", data * 100);
        rej(0);
    })
}

async function DisplayPayement(data) {
    return new Promise((res, rej) => {
        if (data) {
            console.log("Ordered Placed Successfully");
            res(1);
        }
        else {
            console.log("Failed to Placed Ordered , sorry please try again !");
            rej(0);
        }
    })
}

async function CartToOrdered() {
    
    try {
        const ordereData = await PlaceOrdered(5);
        const PayementData = await ProcceedToPayement(ordereData);
        const DisplayData = await DisplayPayement(PayementData);
        console.log(DisplayData);
    } catch (err)
    {
        console.log("Error occured ", err);
    } finally
    {
        console.log("Finally Block");
    }
}


// call the one main function 
CartToOrdered();
