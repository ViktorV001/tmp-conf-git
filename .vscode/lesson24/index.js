// async... await

const timer = 3000;

// имитация запроса по сети
const promise = new Promise((resolve,reject)=>{
    const userData = {
        firstName: "Tom",
        lastName: "Green",
        age: 45,
    };

    if (timer > 3000) {
        reject("Error");
    } else {
        setTimeout(() => {
            resolve(userData);
        },2000);
    }

        });

        const getUserData = async () => {
            try{
                const result = await promise;
                console.log(result);
            } catch (error) {
                    console.log(error);
                }
            };

            getUserData();
        
    