let products = document.getElementById('productslist')
let text = document.getElementById('formcomplete')
let butsend = document.getElementById('submit-button')
let form = document.getElementById('requestform')
let selectList = document.getElementById('category')
let textArea = document.getElementById('reviewer')
let prodsubmit = document.getElementById('prodlist')

function check() {
	if (form.checkValidity() && products.childElementCount > 0) {
		butsend.disabled = false
		text.className = 'alert alert-success mt-2'
		text.innerHTML = 'Finally! Form Complete. Now send it'
	} else {
		butsend.disabled = true
		text.className = 'alert alert-danger mt-2'
		text.innerHTML = 'Form Incomplete'
	}
}

function addProduct(event) {
	event.preventDefault()
	let code = $('#code')
	let productname = $('#productname')
	let quantity = $('#quantity')

	let tbody = document.getElementById('productslist')
	let tr = document.createElement('tr')
	let td = document.createElement('td')
	td.innerHTML = tbody.children.length + 1
	tr.appendChild(td)
	td = document.createElement('td')
	td.innerHTML = document.getElementById('code').value
	tr.appendChild(td)
	td = document.createElement('td')
	td.innerHTML = document.getElementById('productname').value
	tr.appendChild(td)
	td = document.createElement('td')
	td.innerHTML = document.getElementById('quantity').value
	tr.appendChild(td)
	td = document.createElement('td')
	let button = document.createElement('button')
	button.innerHTML = 'Usuń'
	button.className = 'btn btn-outline-danger btn-sm'
	button.addEventListener('click', function () {
		tbody.removeChild(tr)
		for (let i = 0; i < tbody.children.length; i++) {
			tbody.children[i].children[0].innerHTML = i + 1
		}
	})
	td.appendChild(button)
	tr.appendChild(td)
	tbody.appendChild(tr)
	document.getElementById('code').value = ''
	document.getElementById('productname').value = ''
	document.getElementById('quantity').value = ''
	check()
}

function showLoader() {
	let loader = document.getElementById('bgloader')
	loader.style.display = 'block'
}

function hideLoader() {
	let loader = document.getElementById('bgloader')
	loader.style.display = 'none'
}

//complete form func
form.addEventListener('input', function () {
	check()
})

function handleForm(event) {
	event.preventDefault()
	let name = $('#name')
	let email = $('#email')
	let category = $('#category')
	let priority = $('#priority')
	let qcpass = $('#qc')
	let body = function Result() {
		let result = ''
		let tbody = document.getElementById('productslist')
		result +=
			'<table style="border-collapse: collapse;border-color:#ccc;border-spacing:0;"><thead><tr><th style="border: 1px solid #000;padding: 10px 15px;text-align: center;">#</th><th style="border: 1px solid #000;padding: 10px 15px;text-align: center;">Nr. Kat.</th><th style="border: 1px solid #000;padding: 10px 15px;text-align: center;">Nazwa</th><th style="border: 1px solid #000;padding: 10px 15px;text-align: center;">Ilość</th></tr></thead><tbody>'
		for (let i = 0; i < tbody.children.length; i++) {
			result += '<tr><td style="border: 1px solid #000;padding: 10px 15px;text-align: center;">'
			result +=
				tbody.children[i].children[0].innerHTML +
				'</td><td style="border: 1px solid #000;padding: 10px 15px;text-align: center;">'
			result +=
				tbody.children[i].children[1].innerHTML +
				'</td><td style="border: 1px solid #000;padding: 10px 15px;text-align: center;">'
			result +=
				tbody.children[i].children[2].innerHTML +
				'</td><td style="border: 1px solid #000;padding: 10px 15px;text-align: center;">'
			result += tbody.children[i].children[3].innerHTML + '</td></tr>'
		}
		result += '</tbody></table>'
		return result
	}
	let revinfo = $('#reviewerinfo')
	let dw = $('#dw')
	let contactcompany = $('#contactcompany')
	let contactname = $('#contactname')
	let contactemail = $('#contactemail')
	let contacttel = $('#contacttel')
	let country = $('#country')
	let contactaddress = $('#contactaddress')
	let contacttown = $('#contacttown')
	let contactpostcode = $('#postcode')

	showLoader()
	$.ajax({
		url: 'sendEmail.php',
		method: 'POST',
		dataType: 'json',
		data: {
			name: name.val(),
			email: email.val(),
			dw: dw.val(),
			category: category.val(),
			priority: priority.val(),
			quality: qcpass.val(),
			contact1: contactcompany.val(),
			contact2: contactname.val(),
			contact3: contactemail.val(),
			contact4: contacttel.val(),
			contact5: contactaddress.val(),
			contact6: contacttown.val(),
			contact7: contactpostcode.val(),
			contact8: country.val(),
			reviewer: revinfo.val(),
			body: body,
		},
		success: function (response) {
			hideLoader()
			window.location.reload()
			alert('Request sended')
		},
	})
}

form.addEventListener('submit', handleForm)
prodsubmit.addEventListener('submit', addProduct)
selectList.addEventListener('change', function () {
	if (selectList.value === 'Review') {
		textArea.style.display = 'block'
	} else {
		textArea.style.display = 'none'
	}
})

check()
