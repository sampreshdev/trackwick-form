function loadForm(load) {
	if (load) {
		let element = document.createElement('script');
		element.src = 'https://publicformdev.trackwick.com/app.js';
		element.defer = 'defer';
		document.head.appendChild(element);
	}
}
loadForm();
