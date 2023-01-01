let selectList = document.getElementById('category')
let textArea = document.getElementById('reviewer')
selectList.addEventListener('change', function () {
	if (selectList.value === 'Review') {
		textArea.style.display = 'block'
	} else {
		textArea.style.display = 'none'
	}
})

function isNotEmpty(caller) {
	if (caller.val() == '') {
		caller.css('border', '1px solid red')
		alert('Puste pole')
		return false
	} else caller.css('border', '')
	return true
}

function addProduct() {
	let code = $('#code')
	let productname = $('#productname')
	let quantity = $('#quantity')
	if (isNotEmpty(code) && isNotEmpty(productname) && isNotEmpty(quantity)) {
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
	}
}

function showLoader() {
	var loader = document.getElementById('bgloader')
	loader.style.display = 'block'
}

function hideLoader() {
	var loader = document.getElementById('bgloader')
	loader.style.display = 'none'
}

const form = document.getElementById('requestform')

function handleForm(event) {
	event.preventDefault()
	let tablebody = document.getElementById('productslist')
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
	if (tablebody.childElementCount > 0) {
		if (confirm('Ready to send? Check twice!')) {
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
					alert('Wysłano')
				},
			})
		} else {
			return false
		}
	} else {
		alert('Nie dodano produktów')
		return false
	}
}
form.addEventListener('submit', handleForm)
