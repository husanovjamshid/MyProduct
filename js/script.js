var elBody = document.querySelector('body');
var elModeBtn = document.querySelector('.buttons__dark');


elModeBtn.addEventListener('click', function () {
	elBody.classList.toggle('dark');
});
