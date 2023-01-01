function alertModal(title, body) {
	$('#alert-modal-title').html(title)
	$('#alert-modal-body').html(body)
	$('#alert-modal').modal('show')
}

function confirmModal(title, body) {
	let conButton = document.getElementById('confirmButton')
	$('#confirm-modal-title').html(title)
	$('#confirm-modal-body').html(body)
	$('#confirm-modal').modal('show')
	conButton.onclick = function () {
		return true
	}
}
