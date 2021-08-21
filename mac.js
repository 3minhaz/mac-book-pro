// function totalPrice(){
//     const previousTotalPrice = document.getElementById('total-price');
//     const previousTotalPriceText = previousTotalPrice.innerText;
//     const totalPrice = parseFloat(previousTotalPriceText);
//     const memoryPrice =calculation();
//     const extraTotalPrice = totalPrice + memoryPrice;
//     previousTotalPrice.innerText = extraTotalPrice;
//  }
// function calculation(price){
//     const extraMemory = document.getElementById('extra-memory');
//     const extraMemoryText = extraMemory.innerText;
//     const extraMemoryPrice = parseFloat(extraMemoryText);
//     if(price == 0){
//         // const memoryPrice = extraMemoryPrice + price;
//         extraMemory.innerText = '';
//         // totalPrice();
//         // return memoryPrice;
//     }
//     else {
//         const memoryPrice = extraMemoryPrice + price;
//         extraMemory.innerText = memoryPrice;
//         // totalPrice();
//         // return memoryPrice;
//     }

// }

document.getElementById('memory-8gb').addEventListener('click',function(){
    const extraMemory = document.getElementById('extra-memory');
    const extraMemoryText = extraMemory.innerText;
    const extraMemoryPrice = parseFloat(extraMemoryText);
    const memoryPrice = extraMemoryPrice - 180;
    extraMemory.innerText = memoryPrice;
    const previousTotalPrice = document.getElementById('total-price');
    const previousTotalPriceText = previousTotalPrice.innerText;
    const totalPrice = parseFloat(previousTotalPriceText);
    const extraTotalPrice = totalPrice - extraMemoryPrice;
    previousTotalPrice.innerText = extraTotalPrice;
})
document.getElementById('memory-16gb').addEventListener('click',function(){
    const extraMemory = document.getElementById('extra-memory');
    const extraMemoryText = extraMemory.innerText;
    const extraMemoryPrice = parseFloat(extraMemoryText);
    const memoryPrice = extraMemoryPrice + 180;
    extraMemory.innerText = memoryPrice;
    const previousTotalPrice = document.getElementById('total-price');
    const previousTotalPriceText = previousTotalPrice.innerText;
    const totalPrice = parseFloat(previousTotalPriceText);
    const extraTotalPrice = totalPrice + memoryPrice;
    previousTotalPrice.innerText = extraTotalPrice;
})
//storage cost
document.getElementById('storage-256').addEventListener('click',function(){
    const extraMemory = document.getElementById('extra-storage-cost');
    const extraMemoryText = extraMemory.innerText;
    const extraMemoryPrice = parseFloat(extraMemoryText);
    const memoryPrice = extraMemoryPrice - 180;
    extraMemory.innerText = memoryPrice;
    const previousTotalPrice = document.getElementById('total-price');
    const previousTotalPriceText = previousTotalPrice.innerText;
    const totalPrice = parseFloat(previousTotalPriceText);
    const extraTotalPrice = totalPrice - extraMemoryPrice;
    previousTotalPrice.innerText = extraTotalPrice;
})

document.getElementById('storage-512').addEventListener('click',function(){
    const extraMemory = document.getElementById('extra-storage-cost');
    const extraMemoryText = extraMemory.innerText;
    const extraMemoryPrice = parseFloat(extraMemoryText);
    const memoryPrice = extraMemoryPrice + 100;
    extraMemory.innerText = memoryPrice;
    const previousTotalPrice = document.getElementById('total-price');
    const previousTotalPriceText = previousTotalPrice.innerText;
    const totalPrice = parseFloat(previousTotalPriceText);
    const extraTotalPrice = totalPrice + memoryPrice;
    previousTotalPrice.innerText = extraTotalPrice;
})
document.getElementById('storage-1TB').addEventListener('click',function(){
    const extraMemory = document.getElementById('extra-storage-cost');
    const extraMemoryText = extraMemory.innerText;
    const extraMemoryPrice = parseFloat(extraMemoryText);
    const memoryPrice = extraMemoryPrice + 180;
    extraMemory.innerText = memoryPrice;
    const previousTotalPrice = document.getElementById('total-price');
    const previousTotalPriceText = previousTotalPrice.innerText;
    const totalPrice = parseFloat(previousTotalPriceText);
    const extraTotalPrice = totalPrice + memoryPrice;
    previousTotalPrice.innerText = extraTotalPrice;
})