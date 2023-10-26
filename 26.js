let getFulfilledPromise = new Promise(function (resolve, reject) {
    if (a + b === total) {
    resolve(`Yes, ${a} + ${b} is equal to ${total}`);
    } else {
    reject(`No, ${a} + ${b} is not equal to ${total}`);
    }
    });
    console.log(getFulfilledPromise);
    let getRejectedPromise = new Promise(function (resolve, reject) {
        if (a === b) {
        resolve(`Yes, ${a} is equal to ${b}`);
        } else {
        reject(`No, ${a} is not equal to ${b}`);
        }
        });
        console.log(getRejectedPromise);