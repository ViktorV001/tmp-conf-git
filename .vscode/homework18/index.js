document.addEventListener("DOMContentLoaded", function() {
    const prices = [100, 400, 900, 300, 500];
    const pricesContainer = document.getElementById("prices-container");

    function renderPrices(pricesArray) {
        pricesContainer.innerHTML = ""; 
        pricesArray.forEach(price => {
            const priceBlock = document.createElement("div");
            priceBlock.classList.add("price");
            priceBlock.textContent = price;
            pricesContainer.appendChild(priceBlock);
        });
    }

    renderPrices(prices);

    document.getElementById("filter-btn").addEventListener("click", function() {
        const filteredPrices = prices.filter(price => price > 450);
        renderPrices(filteredPrices);
    });
});

//const prices = [100, 400, 900, 300, 500];
// const pricesContainer = document.querlySelector('.prices-container');
//const filterButton = document.querlySelector('.filter-button');

//const pricesArrayElements = prices.map((price) => {
    //const priceContainer = document.createElement("div");
    //priceContainer.textContent = price;
    //return priceContainer;
//});

//pricesArrayElements.forEach((priceContainer) =>
// pricesContainer.append(priceContainer)
//);

//const filteredPrices = ()=>{
 //   pricesContainer.innerHTML = "";

    //const filteredPricespArray = prices.filter((price) => price > 450);
    //const filteredPricespArrayElements =  filteredPricespArray.map(
      //  (filteredPric) => {
      //  const filteredPriceContainer = document.createElement("div");
       // filteredPriceContainer.textContent = filteredPrice;
       // return filteredPriceContainer;
    //}
   // );

 //  filteredPricesArrayElements.forEach((filteredPrice) =>
 //  pricesContainer.append(filteredPrice)
 //  );
//};

//filterButton.addEventListener("click", filteredPrices);

// вариант 2
//const pricesArrayElements = prices.map((price) => {
    //const priceContainer = document.createElement("div");
    //priceContainer.textContent = price;
    //return priceContainer;
//});

//prices.forEach((price) => {
// const pricesContainer.append(priceContainer)
//);