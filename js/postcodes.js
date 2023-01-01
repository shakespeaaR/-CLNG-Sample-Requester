let postCodePatterns = {
	'': {
		pattern: 'none',
		example: 'none',
	},
	Austria: {
		pattern: '[0-9]{4}',
		example: '1010',
	},
	Belgium: {
		pattern: '[0-9]{4}',
		example: '1000',
	},
	Bulgaria: {
		pattern: '[0-9]{4}',
		example: '1000',
	},
	Croatia: {
		pattern: '[0-9]{5}',
		example: '10000',
	},
	Cyprus: {
		pattern: '[0-9]{4}',
		example: '1000',
	},
	'Czech Republic': {
		pattern: '[0-9]{3} [0-9]{2}',
		example: '100 00',
	},
	Denmark: {
		pattern: '[0-9]{4}',
		example: '1000',
	},
	Estonia: {
		pattern: '[0-9]{5}',
		example: '10000',
	},
	Finland: {
		pattern: '[0-9]{5}',
		example: '10000',
	},
	France: {
		pattern: '[0-9]{5}',
		example: '10000',
	},
	Germany: {
		pattern: '[0-9]{5}',
		example: '10000',
	},
	Greece: {
		pattern: '[0-9]{3} [0-9]{2}',
		example: '100 00',
	},
	Hungary: {
		pattern: '[0-9]{4}',
		example: '1000',
	},
	Ireland: {
		pattern: '[A-Z]{1,2}[0-9][0-9 A-Z][0-9][A-Z]{2}',
		example: 'A1 1AA',
	},
	Italy: {
		pattern: '[0-9]{5}',
		example: '10000',
	},
	Latvia: {
		pattern: '[0-9]{4}',
		example: '1000',
	},
	Lithuania: {
		pattern: '[0-9]{5}',
		example: '10000',
	},
	Luxembourg: {
		pattern: '[0-9]{4}',
		example: '1000',
	},
	Malta: {
		pattern: '[A-Z]{3} [0-9]{4}',
		example: 'AAA 1000',
	},
	Netherlands: {
		pattern: '[0-9]{4} [A-Z]{2}',
		example: '1000 AA',
	},
	Poland: {
		pattern: '[0-9]{2}-[0-9]{3}',
		example: '00-000',
	},
	Portugal: {
		pattern: '[0-9]{4}-[0-9]{3}',
		example: '1000-000',
	},
	Romania: {
		pattern: '[0-9]{6}',
		example: '100000',
	},
	Slovakia: {
		pattern: '[0-9]{3} [0-9]{2}',
		example: '100 00',
	},
	Slovenia: {
		pattern: '[0-9]{4}',
		example: '1000',
	},
	Spain: {
		pattern: '[0-9]{5}',
		example: '10000',
	},
	Sweden: {
		pattern: '[0-9]{3} [0-9]{2}',
		example: '100 00',
	},
	'United Kingdom': {
		pattern: '[A-Z]{1,2}[0-9][0-9 A-Z][0-9][A-Z]{2}',
		example: 'A1 1AA',
	},
}

// function setPattern() {
// 	let country = document.getElementById('country').value
// 	let postcode = document.getElementById('postcode')
// 	if (country == 'UK') {
// 		postcode.setAttribute('pattern', '[A-Z]{1,2}[0-9][0-9A-Z]\s[0-9][A-Z]{2}')
// 	} else if (country == 'France') {
// 		postcode.setAttribute('pattern', '[0-9]{5}')
// 	} else if (country == 'Germany') {
// 		postcode.setAttribute('pattern', '[0-9]{5}')
// 	} else if (country == 'Italy') {
// 		postcode.setAttribute('pattern', '[0-9]{5}')
// 	} else if (country == 'Spain') {
// 		postcode.setAttribute('pattern', '[0-9]{5}')
// 	} else if (country == 'Poland') {
// 		postcode.setAttribute('pattern', '[0-9]{2}-[0-9]{3}')
// 	} else if (country == 'Netherlands') {
// 		postcode.setAttribute('pattern', '[0-9]{4}[A-Z]{2}')
// 	} else if (country == 'Belgium') {
// 		postcode.setAttribute('pattern', '[0-9]{4}')
// 	} else if (country == 'Sweden') {
// 		postcode.setAttribute('pattern', '[0-9]{3}[ ]?[0-9]{2}')
// 	} else if (country == 'Denmark') {
// 		postcode.setAttribute('pattern', '[0-9]{4}')
// 	} else if (country == 'Finland') {
// 		postcode.setAttribute('pattern', '[0-9]{5}')
// 	} else if (country == 'Norway') {
// 		postcode.setAttribute('pattern', '[0-9]{4}')
// 	} else if (country == 'Ireland') {
// 		postcode.setAttribute('pattern', '[A-Z]{1,2}[0-9]{1,2}[A-Z]{1,2}')
// 	} else if (country == 'Portugal') {
// 		postcode.setAttribute('pattern', '[0-9]{4}-[0-9]{3}')
// 	} else if (country == 'Greece') {
// 		postcode.setAttribute('pattern', '[0-9]{3}[ ]?[0-9]{2}')
// 	} else if (country == 'Czech Republic') {
// 		postcode.setAttribute('pattern', '[0-9]{3}[ ]?[0-9]{2}')
// 	} else if (country == 'Hungary') {
// 		postcode.setAttribute('pattern', '[0-9]{4}')
// 	} else if (country == 'Slovakia') {
// 		postcode.setAttribute('pattern', '[0-9]{3}[ ]?[0-9]{2}')
// 	} else if (country == 'Slovenia') {
// 		postcode.setAttribute('pattern', '[0-9]{4}')
// 	}
// }

// country.onchange = setPattern

let countrySelect = document.createElement('select')
let selector = document.getElementById('countryselector')
countrySelect.id = 'country'
countrySelect.name = 'country'
countrySelect.className = 'form-select'
countrySelect.placeholder = 'select country'
countrySelect.value = ''
countrySelect.required = true
for (let country in postCodePatterns) {
	let option = document.createElement('option')
	option.value = country
	option.innerHTML = country
	countrySelect.appendChild(option)
}
selector.appendChild(countrySelect)

function setPattern() {
	let country = document.getElementById('country').value
	let pattern = postCodePatterns[country].pattern
	let example = postCodePatterns[country].example
	let postcodeinput = document.getElementById('postcode')
	postcodeinput.setAttribute('pattern', pattern)
	postcodeinput.required = true
}

document.getElementById('country').addEventListener('change', setPattern)

let example = document.createElement('div')
example.setAttribute('id', 'example')
document.body.appendChild(example)

function showExample() {
	let country = document.getElementById('country').value
	let example = postCodePatterns[country].example
	document.getElementById('example').innerHTML = 'post code example: ' + example
}
document.getElementById('country').addEventListener('change', showExample)
showExample()
setPattern()
