let postCodePatterns = {
	'': {
		pattern: 'none',
		example: 'none',
	},
	Albania: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Algeria: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Andorra: {
		pattern: '[A-Z]{2}[0-9]{3}',
		example: 'AA999',
	},
	Angola: {
		pattern: '[0-9]{3}',
		example: '999',
	},
	Argentina: {
		pattern: '[A-Z][0-9]{4}[A-Z]{3}',
		example: 'A9999AAA',
	},
	Armenia: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Australia: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Austria: {
		pattern: '[0-9]{4}',
		example: '1010',
	},
	Azores: {
		pattern: '[0-9]{4}-[0-9]{3}',
		example: '9999-999',
	},
	Bahrain: {
		pattern: '[0-9]{3}',
		example: '999',
	},
	Bangladesh: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Belarus: {
		pattern: '[0-9]{6}',
		example: '999999',
	},
	Belgium: {
		pattern: '[0-9]{4}',
		example: '1000',
	},
	Benin: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Bermuda: {
		pattern: '[A-Z]{2}[0-9]{2}',
		example: 'AA99',
	},
	'Bosnia-Herzegovina': {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Brazil: {
		pattern: '[0-9]{5}-[0-9]{3}',
		example: '99999-999',
	},
	Brunei: {
		pattern: '[A-Z]{2}[0-9]{4}',
		example: 'AA9999',
	},
	Bulgaria: {
		pattern: '[0-9]{4}',
		example: '1000',
	},
	Cameroon: {
		pattern: '[0-9]{3}',
		example: '999',
	},
	Canada: {
		pattern: '[A-Z][0-9][A-Z] [0-9][A-Z][0-9]',
		example: 'A9A 9A9',
	},
	'Canary Islands': {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	'Cape Verde': {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	'Channel Islands': {
		pattern: '[A-Z]{2}[0-9]{2}[A-Z]{2}',
		example: 'AA99AA',
	},
	Chile: {
		pattern: '[0-9]{8}-[0-9]{1}',
		example: '99999999-9',
	},
	Colombia: {
		pattern: '[0-9]{6}',
		example: '999999',
	},
	Congo: {
		pattern: '[0-9]{3}',
		example: '999',
	},
	'Costa Rica': {
		pattern: '[0-9]{5}-[0-9]{4}',
		example: '99999-9999',
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
	'Dominican Republic': {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Ecuador: {
		pattern: '[0-9]{6}',
		example: '999999',
	},
	Egypt: {
		pattern: '[0-9]{5}',
		example: '99999',
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
	Georgia: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Germany: {
		pattern: '[0-9]{5}',
		example: '10000',
	},
	Gibraltar: {
		pattern: '[A-Z]{2}[0-9]{3}[A-Z]{2}',
		example: 'AA999AA',
	},
	Greece: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Guatemala: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Guinea: {
		pattern: '[0-9]{3}',
		example: '999',
	},
	Honduras: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Hungary: {
		pattern: '[0-9]{4}',
		example: '1000',
	},
	Iceland: {
		pattern: '[0-9]{3}',
		example: '999',
	},
	India: {
		pattern: '[0-9]{6}',
		example: '999999',
	},
	Indonesia: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Israel: {
		pattern: '[0-9]{7}',
		example: '9999999',
	},
	Italy: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Ireland: {
		pattern: '[A-Z]{1,2}[0-9][0-9 A-Z][0-9][A-Z]{2}',
		example: 'A1 1AA',
	},
	Jamaica: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Japan: {
		pattern: '[0-9]{3}-[0-9]{4}',
		example: '999-9999',
	},
	Jordan: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Kazakhstan: {
		pattern: '[0-9]{6}',
		example: '999999',
	},
	Kenya: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Kosovo: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Kuwait: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Kyrgyzstan: {
		pattern: '[0-9]{6}',
		example: '999999',
	},
	Latvia: {
		pattern: '[0-9]{4}',
		example: '1000',
	},
	Liechtenstein: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Lithuania: {
		pattern: '[A-Z]{2}-[0-9]{5}',
		example: 'AA-99999',
	},
	Luxembourg: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Macedonia: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Madeira: {
		pattern: '[0-9]{4}-[0-9]{3}',
		example: '9999-999',
	},
	Malaysia: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Mali: {
		pattern: '[A-Z]{2}[0-9]{4}',
		example: 'AA9999',
	},
	Malta: {
		pattern: '[A-Z]{3} [0-9]{4}',
		example: 'AAA 1000',
	},
	Mauritius: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Mexico: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Moldova: {
		pattern: '[0-9]{2}-[0-9]{2}',
		example: '99-99',
	},
	Monaco: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Mongolia: {
		pattern: '[0-9]{6}',
		example: '999999',
	},
	Montenegro: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Morocco: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Nepal: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Netherlands: {
		pattern: '[0-9]{4} [A-Z]{2}',
		example: '1000 AA',
	},
	'New Zealand': {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Niger: {
		pattern: '[A-Z]{2}[0-9]{4}',
		example: 'AA9999',
	},
	Nigeria: {
		pattern: '[0-9]{6}',
		example: '999999',
	},
	'Northern Mariana Islands': {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Norway: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Oman: {
		pattern: '[0-9]{3}',
		example: '999',
	},
	Pakistan: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Panama: {
		pattern: '[0-9]{3}',
		example: '999',
	},
	Paraguay: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Peru: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Philippines: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Poland: {
		pattern: '[0-9]{2}-[0-9]{3}',
		example: '00-000',
	},
	Portugal: {
		pattern: '[0-9]{4}-[0-9]{3}',
		example: '1000-000',
	},
	'Puerto Rico': {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Qatar: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Romania: {
		pattern: '[0-9]{6}',
		example: '999999',
	},
	Rota: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Russia: {
		pattern: '[0-9]{6}',
		example: '999999',
	},
	Saipan: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	'San Marino': {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	'Saudi Arabia': {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Scotland: {
		pattern: '[A-Z]{2}[0-9]{2} [0-9][A-Z]{2}',
		example: 'AA99 9AA',
	},
	Senegal: {
		pattern: '[0-9]{3}',
		example: '999',
	},
	Serbia: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Seychelles: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Singapore: {
		pattern: '[0-9]{6}',
		example: '999999',
	},
	Slovakia: {
		pattern: '[0-9]{3} [0-9]{2}',
		example: '100 00',
	},
	Slovenia: {
		pattern: '[0-9]{4}',
		example: '1000',
	},
	'South Korea': {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Spain: {
		pattern: '[0-9]{5}',
		example: '10000',
	},
	'Sri Lanka': {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	'St. Croix (U.S. Virgin Islands)': {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	'St. Thomas (US Virgin Islands)': {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Swaziland: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Sweden: {
		pattern: '[0-9]{3} [0-9]{2}',
		example: '100 00',
	},
	Switzerland: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Taiwan: {
		pattern: '[0-9]{3}',
		example: '999',
	},
	Tanzania: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Thailand: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	'Tinian (Northern Mariana Islands)': {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Tunisia: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Turkey: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Ukraine: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	'United Kingdom': {
		pattern: '[A-Z]{1,2}[0-9] [0-9 A-Z][0-9][A-Z]{2}',
		example: 'A9 9AA, A99 9AA, AA9 9AA, AA99 9AA, A9A 9AA, AA9A 9AA',
	},
	'United Arab Emirates': {
		pattern: '[0-9]{6}',
		example: '999999',
	},
	'United States of America': {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Uruguay: {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	'US Virgin Islands': {
		pattern: '[0-9]{5}',
		example: '99999',
	},
	Uzbekistan: {
		pattern: '[0-9]{6}',
		example: '999999',
	},
	Venezuela: {
		pattern: '[0-9]{4}',
		example: '9999',
	},
	Wales: {
		pattern: '[A-Z]{1,2}[0-9] [0-9 A-Z][0-9][A-Z]{2}',
		example: 'A9 9AA, A99 9AA, AA9 9AA, AA99 9AA, A9A 9AA, AA9A 9AA',
	},
	Zambia: {
		pattern: '[0-9]{5}',
		example: '99999',
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
