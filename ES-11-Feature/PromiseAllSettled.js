//accepts a list of Promises and returns a new Promise that resolves after 
//all the input Promises have settled, either resolved or rejected.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved'); //The first promise has resolve 
        resolve(10);
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected'); //The second promise has rejected
        reject(20);
    }, 2 * 1000);
});                                                

Promise.allSettled([p1, p2])
    .then((result) => {
        console.log(result);  //0: {status: "fulfilled", value: 10}
    });                       //1: {status: "rejected", reason: 20}
