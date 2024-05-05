let total = 0;

function eventClick(target){
    const productCart = document.getElementById('add-cart');
    const itemName = target.parentNode.childNodes[1].innerText;
    const li = document.createElement("li");
   
    li.innerText = itemName;
    productCart.appendChild(li);

    const price = parseFloat(target.parentNode.childNodes[3].innerText);
    total = parseFloat(total) + price;
    document.getElementById('total-value').innerText = total + " TK";
    document.getElementById('final-value').innerText = total + " TK";


    const costing = parseFloat(document.getElementById('final-value').innerText);

    if (costing > 0) {
        document.getElementById("buy").removeAttribute('disabled');
    }
    else{
        document.getElementById("buy").setAttribute('disabled');
    }
}




document.getElementById("coupon-btn").addEventListener('click', function(){
    const couponInput = document.getElementById('coupon').value;
    const prevFinalValue = parseFloat(document.getElementById('final-value').innerText);

    const prevDis = parseFloat(document.getElementById('discount').innerText);
    const off = ((100 - 20) * prevFinalValue) / 100;
    const disOff = prevFinalValue - off;

    if(prevFinalValue>200){
        if(couponInput == "SELL200"){
            document.getElementById('final-value').innerText = prevFinalValue - disOff + " TK";
            document.getElementById('discount').innerText = prevDis + disOff + " TK";
        }
        else{
            document.getElementById('final-value').innerText = prevFinalValue + " TK";
        }
    }
    document.getElementById('coupon').value = '';

})

document.getElementById("use-coupon").addEventListener('click', function(){
    document.getElementById('coupon').value = "SELL200"; 
})

function home(){
    window.location = "index.html";
}
    
