// memory cost section 
const memory8GB = document.getElementById('memory-8gb');
const memoryCost = document.getElementById('extra-memory-cost')
memory8GB.addEventListener("click", function () {
    memoryCost.innerText = 0;
    totalPrice()
})
const memory16Gb = document.getElementById('memory-16gb');
const extraMemory = document.getElementById('extra-memory-cost')
memory16Gb.addEventListener("click", function () {
    extraMemory.innerText = 180;
    totalPrice();
})
// storage cost section
const storage256GB = document.getElementById('storage-256');
const storage256GBCost = document.getElementById('extra-storage-cost')
storage256GB.addEventListener("click", function () {
    storage256GBCost.innerText = 0;
    totalPrice()
})


const storage512GB = document.getElementById('storage-512');
const storage512GBCost = document.getElementById('extra-storage-cost')
storage512GB.addEventListener("click", function () {
    storage512GBCost.innerText = 100;
    totalPrice()
})
const storage1TB = document.getElementById('storage-1TB');
const storage1TBCost = document.getElementById('extra-storage-cost')
storage1TB.addEventListener("click", function () {
    storage1TBCost.innerText = 180;
    totalPrice()
})

// Delivery Cost Section 
const freeDelivery = document.getElementById('free-delivery');
const freeDeliveryCost = document.getElementById('delivery-cost')
freeDelivery.addEventListener("click", function () {
    freeDeliveryCost.innerText = 0;
    totalPrice();
})
const deliveryCharge = document.getElementById('delivery-charge');
const deliveryCost = document.getElementById('delivery-cost')
deliveryCharge.addEventListener("click", function () {
    deliveryCost.innerText = 20;
    totalPrice();
})
const total = document.getElementById('total-price');

// Total Calculation 

function totalPrice() {
    const memory16Gb = parseFloat(extraMemory.innerText);
    const storage256GB = parseFloat(storage256GBCost.innerText);
    const deliveryCharge = parseFloat(deliveryCost.innerText);
    const grandTotal = memory16Gb + storage256GB + deliveryCharge + 1299;
    total.innerText = grandTotal;

}

function totalPrice() {
    const memory16Gb = parseFloat(extraMemory.innerText);
    const storage1TB = parseFloat(storage1TBCost.innerText);
    const deliveryCharge = parseFloat(deliveryCost.innerText);
    const grandTotal = memory16Gb + storage1TB + deliveryCharge + 1299;
    total.innerText = grandTotal;
    const finalTotal = document.getElementById('price-total-footer');
    finalTotal.innerText = grandTotal;
    
}

// Promo Code part
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInputField = document.getElementById('input');
    const promoCode = promoInputField.value;
    if (promoCode == 'stevekaku') {
        const totalPriceValue = document.getElementById('total-price');
        const totalPriceFooter = document.getElementById('price-total-footer');
        const totalPriceAmount = parseFloat(totalPriceValue.innerText);
        const discountPrice = totalPriceAmount * 0.80;
        totalPriceFooter.innerText = discountPrice;
    }
    promoInputField.value = '';

})
