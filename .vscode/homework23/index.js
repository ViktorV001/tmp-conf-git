function delay(value) {
  return new Promise((resolve, reject) => {
    if (typeof value === "number") {
      setTimeout(() => {
        resolve(value * 2);
      }, 5000);
    } else {
      reject("The argument is not a number");
    }
  });
}
function processingDelay(value) {
  delay(value)
    .then((result) => {
      console.log("Resolved:", result);
    })
    .catch((error) => {
      console.error("Rejected:", error);
    });
}
// Демонстрация результатов
processingDelay(10);
processingDelay("text");


/*

const delay = (value) =>{
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof value ==="number"){
                let result =value * 2;
                resolve(result);
            }else{
                let errorMessage = "The argument is not a number";
                reject(errorMessage);
            }
        }, 5000);
        });

        return promise;
    };

    const processingDelay = (value)=>{
        delay(value).then((result)=>{
            console.log(`Resolved: ${result}`);
        }).catch((error)=> {
            console.log(`Rejected: ${error}`);
        });
};
processingDelay(10);
processingDelay('text');
    
*/
