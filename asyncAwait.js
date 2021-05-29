const myString = 45;

const returnsAPromise = (string) => {
  return new Promise((resolve, reject) => {
    if (typeof string === "string") {
      resolve(`${string} is a resolved promise now`);
    } else {
      reject(`${string} is a rejected promise now`);
    }
  });
};

let isOurPromiseFinished = false;
const myAsyncAwaitBlock = async (str) => {
  try {
    // If the promise resolves, we enter this code block
    const myPromise = await returnsAPromise(str);
    console.log(`I'm in try block of async-await, ${myPromise}`);
  } catch (err) {
    // If the promise rejects, we enter this code block
    console.log(`I'm in catch block of async-await, ${err}`);
  } finally {
    /* This is for code that doesn't rely on the outcome of the    
    promise but still needs to run once it's handled */
    isOurPromiseFinished = true;
  }
  console.log(`isOurPromiseFinished:${isOurPromiseFinished}`);
};

myAsyncAwaitBlock(myString);
console.log(`isOurPromiseFinished:${isOurPromiseFinished}`);
