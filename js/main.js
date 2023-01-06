let products = document.getElementById('productslist')
let prodbg = document.getElementById('prodlistbg')
let text = document.getElementById('formcomplete')
let butsend = document.getElementById('submit-button')
let form = document.getElementById('requestform')
let selectList = document.getElementById('category')
let textArea = document.getElementById('reviewer')
let textAreainput = document.getElementById('reviewerinfo')
let prodsubmit = document.getElementById('prodlist')
let addCCbutton = document.getElementById('addCC')
let maillimit = 0

function ccEmails() {
	let ccdw = document.getElementById('ccbody')
	let inputs = ccdw.getElementsByTagName('input')
	var text2 = ''
	for (var i = 0; i < inputs.length; i++) {
		text2 += '"' + inputs[i].value + '",'
	}
	return text2
}

function addCCmail() {
	let ccBody = document.getElementById('ccbody')
	var emailInput = document.createElement('input')
	emailInput.id = 'dw'
	emailInput.className = 'form-control mt-1'
	emailInput.placeholder = 'Enter Email'
	emailInput.setAttribute('type', 'email')
	emailInput.setAttribute('pattern', '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$')
	if (maillimit < 2) {
		ccBody.appendChild(emailInput)
		maillimit++
	} else {
		alert('CC Limit Reached (MAX 3)')
		return false
	}
}

function check() {
	if (form.checkValidity() && products.childElementCount > 0) {
		butsend.disabled = false
		butsend.className = 'btn btn-success btn-lg'
	} else {
		butsend.disabled = true
		butsend.className = 'btn btn-danger btn-lg'
	}
}

function addProduct(event) {
	event.preventDefault()
	let popup = document.getElementById('liveToast')
	let popupdata = document.getElementById('toast-body')
	let toast = new bootstrap.Toast(popup)
	let tbody = document.getElementById('productslist')
	let tr = document.createElement('tr')
	let td = document.createElement('td')
	popupdata.innerHTML =
		'<strong>' +
		document.getElementById('code').value +
		' | ' +
		document.getElementById('productname').value +
		' | QTY: ' +
		document.getElementById('quantity').value
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
	button.innerHTML = 'Remove'
	button.className = 'btn btn-outline-danger btn-sm'
	button.addEventListener('click', function () {
		tbody.removeChild(tr)
		for (let i = 0; i < tbody.children.length; i++) {
			tbody.children[i].children[0].innerHTML = i + 1
		}
		check()
	})
	td.appendChild(button)
	tr.appendChild(td)
	tbody.appendChild(tr)
	document.getElementById('code').value = ''
	document.getElementById('productname').value = ''
	document.getElementById('quantity').value = ''
	toast.show()
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
	if (form.checkValidity() && products.childElementCount > 0) {
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
	} else {
		check()
	}
}

// addCCbutton.addEventListener('click', addCCmail)
form.addEventListener('submit', handleForm)
prodsubmit.addEventListener('submit', addProduct)
selectList.addEventListener('change', function () {
	if (selectList.value === 'Review') {
		textArea.style.display = 'block'
		textAreainput.required = true
	} else {
		textArea.style.display = 'none'
		textAreainput.required = false
	}
})

check()
