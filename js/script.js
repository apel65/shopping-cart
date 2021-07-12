// phone & case quantity increment & decrement button
const phoneQtyIncrementBtn = document.getElementById('phone-qty-increment-btn');
const phoneQtyDecrementBtn = document.getElementById('phone-qty-decrement-btn');
const caseQtyIncrementBtn = document.getElementById('case-qty-increment-btn');
const caseQtyDecrementBtn = document.getElementById('case-qty-decrement-btn');


// phone quantity & Price determine
phoneQuantityAndPrice(phoneQtyIncrementBtn);
phoneQuantityAndPrice(phoneQtyDecrementBtn);

function phoneQuantityAndPrice(quantityBtn) {
	quantityBtn.addEventListener('click', function () {
		let quantity = document.getElementById('phone-qty').value;
		let quantityNumber = parseInt(quantity);

		if (quantityBtn.id == 'phone-qty-increment-btn') {
			quantityNumber++;
		} else {
			if (quantityNumber === 1) {
				return;
			} else {
				quantityNumber--;
			}
		}
		document.getElementById('phone-qty').value = quantityNumber;

		let phonePrice = 1219 * quantityNumber; // every phone price = 1219 taka
		document.getElementById('phone-price').innerText = phonePrice;

		// phone subtotal price
		phoneSubtotal(phonePrice);
	});
}

// case quantity & Price determine
caseQuantityAndPrice(caseQtyIncrementBtn);
caseQuantityAndPrice(caseQtyDecrementBtn);

function caseQuantityAndPrice(quantityBtn) {
	quantityBtn.addEventListener('click', function () {
		let quantity = document.getElementById('case-qty').value;
		let quantityNumber = parseInt(quantity);

		if (quantityBtn.id == 'case-qty-increment-btn') {
			quantityNumber++;
		} else {
			if (quantityNumber === 1) {
				return;
			} else {
				quantityNumber--;
			}
		}
		document.getElementById('case-qty').value = quantityNumber;

		let casePrice = 59 * quantityNumber; // every case price 59 taka
		document.getElementById('case-price').innerText = casePrice;

		//case subtotal price
		caseSubtotal(casePrice);
	});
}

function phoneSubtotal(phonePrice) {
	let casePrice = document.getElementById('case-price').innerText;
	let casePriceNumber = parseFloat(casePrice);
	let subTotal = casePriceNumber + phonePrice;
	taxAndTotal(subTotal);
}

function caseSubtotal(casePrice) {
	let phonePrice = document.getElementById('phone-price').innerText;
	let phonePriceNumber = parseFloat(phonePrice);
	let subTotal = phonePriceNumber + casePrice;

	// tax and total
	taxAndTotal(subTotal);
}

function taxAndTotal(subTotal) {
	document.getElementById('sub-total').innerText = subTotal;
	// tax
	let tax = parseFloat((subTotal / 95).toFixed(2));
	document.getElementById('tax').innerText = tax;
	// Total
	let total = subTotal + tax;
	document.getElementById('final-total').innerText = total;
}

// checkout alert
const checkoutBtn = document.getElementById('checkout-btn');
const message = document.getElementById('message');
checkoutBtn.addEventListener('click', function(){
    alert('Do you purchase these items?');
    message.innerHTML = 'Thank you! your order ready to pack.'
})
