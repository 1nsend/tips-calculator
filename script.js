function calculateTip(params) {
	params.preventDefault();
	let bill = document.getElementById('bill').value;
	let service = document.getElementById('service').value;
	let numOfPeole = document.getElementById('people').value;

	if(bill == "" | service == 0){
		alert("Please, fill the values!")
		return;
	}

	if(numOfPeole == "" | numOfPeole <= 1){
		numOfPeole = 1;
		document.getElementById('each').style.display = "nome";
	} else {
		document.getElementById('each').style.display = "block";
	}

	let total = (bill * service) / numOfPeole;
	total = total.toFixed(2);
	document.getElementById('tip').innerHTML = total;
	document.getElementById('totalTip').style.display = "block";

	
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip)