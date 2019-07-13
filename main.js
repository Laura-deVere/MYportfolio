import Animations from './js/modules/Animations';
import LiquidButton from './js/modules/LiquidButton';

const animations = new Animations();

const form = document.getElementById('contact-form');
const name = document.getElementById('mail-yourName');
const email = document.getElementById('mail-email');
const message = document.getElementById('mail-message');
const formSubmitBtn = document.getElementById('form-submit');
const statusDiv = document.getElementById('status');
const $form = $('#contact-form');
const skillsList = document.getElementById('skills');
let counter = 0;

function isInView(bounding) {
	let distance = skillsList.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

function getRandomNum(arr) {	
	let randomNum = Math.floor(Math.random() * Math.floor(arr.length));
	return randomNum;
}

function scaleList() {
	const list = skillsList.querySelectorAll('li');

	const colorsList = ['#ff00b7', '#36264f', '#00ffce', '#045afa', '#4c2eff', '#6b47de', '#999', '#191919'];

	for (let i = 0; i < list.length; i++) {
		let color = getRandomNum(colorsList);

		list[i].style.backgroundColor = colorsList[color];
		colorsList.splice(color,1);

		list[i].classList.remove('scaleDown');
		list[i].classList.add('scaleUp');
	}
}

window.addEventListener('scroll', () => {
	if (isInView(skillsList) && counter !== 1) {
		scaleList();
		counter = 1;
	} else {
    	return false;
  }
}, false);


// FORM VALIDATION
form.checkValidity();
email.addEventListener('invalid', invalidEmail);

function invalidEmail() {
	if (email.value == '') {
		email.setCustomValidity('Please enter a valid email.');
	}
	 else if (email.validity.typeMismatch) {
		email.setCustomValidity('Please enter a valid email.');
	} else {
		email.setCustomValidity('');
	}
	return true;
}

function clearFields() {
	const formValues = [name, email, message];

	formValues.forEach((el,i)=>{
		el.value = '';
	});
}

function displayStatus(status) {
	let messageStatus;
	if (status == 'success') {
		messageStatus = 'Thank You! Your message has been sent'
	} else if (status == 'error') {
		messageStatus = 'Oops! Something went wrong and we couldn\'t send your message.'
	}
	statusDiv.innerHTML = messageStatus;
	statusDiv.style.display = 'block';
}

$form.submit(function(e) {
	const isValid = form.checkValidity();
	const data = $form.serialize();
	e.preventDefault();
	if (!isValid) {
		e.preventDefault();
	} else {
		$.ajax({
        type: 'POST',
        url: $form.attr('action'),
        data: data,
        success: function (data) {
            console.log(data); 
            clearFields(); 
            displayStatus('success');
        },
        error: function (data) {
            console.log(data);
            displayStatus('error');
        }
	});
	}    
});