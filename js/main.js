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
let cleartprodlistbtn = document.getElementById('clrbutton')
let clearformbtn = document.getElementById('clear-form')
let popup = document.getElementById('liveToast')
let popupdata = document.getElementById('toast-body')
let toast = new bootstrap.Toast(popup)
let checkbox = document.getElementById('contactdata')
let contactdatacompany = document.getElementById('contactdatacompany')
let contactdataname = document.getElementById('contactdataname')
let contactdataemail = document.getElementById('contactdataemail')
let contactdatatel = document.getElementById('contactdatatel')
let contactcompany = document.getElementById('contactcompany')
let contactname = document.getElementById('contactname')
let contactemail = document.getElementById('contactemail')
let contacttel = document.getElementById('contacttel')
let recipient = document.getElementById('recipientident')

function clearProdListFields() {
	let inputs = prodlist.getElementsByTagName('input')
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].value = ''
	}
}

function copyContactDataCheckbox() {
	//recipient
	let contactdatacompany = document.getElementById('contactdatacompany')
	let contactdataname = document.getElementById('contactdataname')
	let contactdataemail = document.getElementById('contactdataemail')
	let contactdatatel = document.getElementById('contactdatatel')
	//contact
	let contactcompany = document.getElementById('contactcompany')
	let contactname = document.getElementById('contactname')
	let contactemail = document.getElementById('contactemail')
	let contacttel = document.getElementById('contacttel')
	if (checkbox.checked) {
		contactcompany.disabled = true
		contactname.disabled = true
		contactemail.disabled = true
		contacttel.disabled = true
		contactcompany.value = contactdatacompany.value
		contactname.value = contactdataname.value
		contactemail.value = contactdataemail.value
		contacttel.value = contactdatatel.value
	} else {
		contactcompany.disabled = false
		contactname.disabled = false
		contactemail.disabled = false
		contacttel.disabled = false
		contactcompany.value = ''
		contactname.value = ''
		contactemail.value = ''
		contacttel.value = ''
	}
}

function copyContactData() {
	if (checkbox.checked) {
		contactcompany.disabled = true
		contactname.disabled = true
		contactemail.disabled = true
		contacttel.disabled = true
		contactcompany.value = contactdatacompany.value
		contactname.value = contactdataname.value
		contactemail.value = contactdataemail.value
		contacttel.value = contactdatatel.value
	} else {
		contactcompany.disabled = false
		contactname.disabled = false
		contactemail.disabled = false
		contacttel.disabled = false
	}
}

function clearFormFields() {
	let inputs = form.getElementsByTagName('input')
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].value = ''
	}
	clearProdListFields()
}

function check() {
	if (form.checkValidity() && products.childElementCount > 0) {
		butsend.disabled = false
		butsend.className = 'btn btn-success btn-lg'
	} else {
		butsend.disabled = true
		butsend.className = 'btn btn-secondary btn-lg'
	}
}

function addProduct(event) {
	checktable()
	event.preventDefault()
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
	button.innerHTML = '<i class="bi bi-trash3"></i>'
	button.className = 'btn btn-danger btn-sm cst-btn'
	button.addEventListener('click', function () {
		tbody.removeChild(tr)
		for (let i = 0; i < tbody.children.length; i++) {
			tbody.children[i].children[0].innerHTML = i + 1
		}
		check()
		checktable()
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

function checktable() {
	if (products.rows.length == 0) {
		var row = products.insertRow(0)
		var cell1 = row.insertCell(0)
		cell1.innerHTML = '<i class="bi bi-emoji-dizzy bi-color" style="font-size: 50px; font-style: normal;"><br>No products</i>'
		cell1.setAttribute('colspan', '5')
	} else {
		var row = products.rows[0]
		var cell1 = row.cells[0]
		if (
			cell1.innerHTML == '<i class="bi bi-emoji-dizzy bi-color" style="font-size: 50px; font-style: normal;"><br>No products</i>'
		) {
			products.deleteRow(0)
		}
	}
}

function showLoader() {
	let loader = document.getElementById('bgloader')
	loader.style.display = 'block'
}

function hideLoader() {
	let loader = document.getElementById('bgloader')
	loader.style.display = 'none'
}

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
			'<table style="border-collapse: collapse;border-color:#ccc;border-spacing:0;"><thead><tr><th style="border: 1px solid #000;padding: 10px 15px;text-align: center;">#</th><th style="border: 1px solid #000;padding: 10px 15px;text-align: center;">Cat. No.</th><th style="border: 1px solid #000;padding: 10px 15px;text-align: center;">Name</th><th style="border: 1px solid #000;padding: 10px 15px;text-align: center;">QTY:</th></tr></thead><tbody>'
		for (let i = 0; i < tbody.children.length; i++) {
			result +=
				'<tr style="text-transform:uppercase"><td style="border: 1px solid #000;padding: 10px 15px;text-align: center;">'
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
	let comment = $('#comment')
	let contactdatacompany = $('#contactdatacompany')
	let contactdataname = $('#contactdataname')
	let contactdataemail = $('#contactdataemail')
	let contactdatatel = $('#contactdatatel')
	let recipient = $('#recipientident')
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
				contactdata1: contactdatacompany.val(),
				contactdata2: contactdataname.val(),
				contactdata3: contactdataemail.val(),
				contactdata4: contactdatatel.val(),
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
				comment: comment.val(),
				recip: recipient.val(),
			},
			success: function (response) {
				hideLoader()
				clearFormFields()
				window.location.reload()
				console.log(response)
				alert('Request sended')
			},
			failed: function (response) {
				hideLoader()
				clearFormFields()
				window.location.reload()
				console.log(response)
				alert('Fail, check error in console.')
			},
		})
	} else {
		check()
	}
}

// addCCbutton.addEventListener('click', addCCmail)
checkbox.addEventListener('click', copyContactDataCheckbox)
form.addEventListener('submit', handleForm)
prodsubmit.addEventListener('submit', addProduct)
cleartprodlistbtn.addEventListener('click', clearProdListFields)
clearformbtn.addEventListener('click', clearFormFields)
document.addEventListener('change', copyContactData)
products.addEventListener('change', checktable)
selectList.addEventListener('change', function () {
	if (selectList.value === 'Review') {
		textArea.style.display = 'block'
		textAreainput.required = true
	} else {
		textArea.style.display = 'none'
		textAreainput.required = false
	}
})
copyContactData()
checktable()
check()
