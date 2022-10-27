var elBody = document.querySelector('body');
var elModeBtn = document.querySelector('.dark__mode');
var elLightBtn = document.querySelector('.light__mode')


elModeBtn.addEventListener('click', function () {
	elBody.classList.add('dark');
	elModeBtn.classList.add('mode__active')
	elLightBtn.classList.remove('mode__active')
});

elLightBtn.addEventListener('click', function() {
	elBody.classList.remove('dark')
	elModeBtn.classList.remove('mode__active')
	elLightBtn.classList.add('mode__active')
})
