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

const myFunction = (str) => {
  returnsAPromise(str)
    .then((res) => {
      // If the promise resolves, we enter this code block
      console.log(`I'm in then block, ${res}`);
    })
    .catch((err) => {
      /* If the promise rejects, or if any of the code in our .then 
    statement throws, we enter this code block */
      console.log(`I'm in catch block, ${err}`);
    })
    .finally(() => {
      /* This is for code that doesn't rely on the outcome of the 
    promise but still needs to run once it's handled */
      console.log("finally block always runs");
    });
};
myFunction(myString);
