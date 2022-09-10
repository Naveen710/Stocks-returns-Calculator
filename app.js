var purchasePrice = document.querySelector("#purchase-price")

var stockQuantity = document.querySelector("#stock-quantity")

var currentPrice = document.querySelector("#current-price")

var checkBtn = document.querySelector("#check-btn")
var output = document.querySelector("#output")

function calculateProfitLoss(purchase, quantity, current) {
    const difference = (current - purchase) * quantity;
    if (difference>0) {
        let profit = ((current - purchase) /purchase)*100
        profit=Math.abs(profit).toFixed(2);

        message(`Hey the profit is ${difference} and the profit percent is ${profit}`);
    } else if (difference<0) {
        let loss = ((purchase - current) /current)*100
        loss=Math.abs(loss).toFixed(2);
        message(`Hey the loss is ${Math.abs(difference)} and the loss percent is ${loss}%`)

    } else {
        message("No pain,no Gain")

    }

}
checkBtn.addEventListener("click", checkHandler)

function checkHandler() 
{
    var purchase = Number(purchasePrice.value)
    var quantity = Number(stockQuantity.value);
    var current = Number(currentPrice.value)
    if (
        !(purchasePrice.value === "") &&
        !(stockQuantity.value === "") &&
        !(currentPrice.value === "")
    ) {
        if (purchase < 0 || quantity < 0 || current < 0) {
            output.innerText = "Please enter a valid value";
            return 0;
        }
        calculateProfitLoss(purchase, quantity, current)
    } else {
        output.innerText = "Please enter all the values";
    }
}

function message(message) {
    output.innerHTML = message;

}