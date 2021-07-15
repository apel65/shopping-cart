const productChangeHandler = (isIncrement, product) => {
	const productQuantity = getInputValue(product);
	let productNewQuantity = productQuantity;
	if (isIncrement) {
		productNewQuantity++;
	} else {
		if (productNewQuantity > 0) {
			productNewQuantity--;
		}
	}

	document.getElementById(`${product}-quantity`).value = productNewQuantity;

	let totalProductPrice;
	if (product == 'phone') {
		totalProductPrice = productNewQuantity * 1219;
	}
	if (product == 'case') {
		totalProductPrice = productNewQuantity * 59;
	}

	document.getElementById(`${product}-price`).innerText = totalProductPrice;
	productCalculation();
};

const productCalculation = () => {
	const phoneQuantity = getInputValue('phone');
	const caseQuantity = getInputValue('case');

	const subTotal = phoneQuantity * 1219 + caseQuantity * 59;
	document.getElementById('sub-total').innerText = subTotal;

	const tax = Math.round(subTotal * 0.1);
	document.getElementById('tax').innerText = tax;

	const grandTotal = subTotal + tax;
	document.getElementById('grand-total').innerText = grandTotal;
};

const getInputValue = (product) => {
	const productInputQuantity = document.getElementById(`${product}-quantity`);
	return (productQuantity = parseInt(productInputQuantity.value));
};

// checkout alert
const checkoutBtn = document.getElementById('checkout-btn');
const message = document.getElementById('message');
checkoutBtn.addEventListener('click', function () {
	alert('Do you purchase these items?');
	message.innerHTML = 'Thank you! your order ready to pack.';
});
