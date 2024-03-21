const showNumbers = async (seconds) => {
  return new Promise((resolve, reject) => {
    if (typeof seconds !== 'number') {
      reject("Аргумент не является числом");
    } else {
      setTimeout(() => {
        resolve(`Прошло ${seconds} секунд(ы)`);
      }, seconds * 1000);
    }
  });
};
const wait = async (seconds) => {
  try {
    const result = await showNumbers(seconds);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
(async () => {
  await wait(3);
  await wait(1);
  await wait(5);
  await wait(7);
})();


const showNumbers = async (seconds) => {
  const promise = new Promise((resolve, reject)=>{
    if(typeofseconds !== "number") {
      reject("Аргумент не является числом");
    } else {
      let ms = seconds * 1000;
      setTimeout(() => {
        resolve(`Прошло ${seconds} секунд(ы)`);
      }, ms);
    }
  });
  return promise;
};

