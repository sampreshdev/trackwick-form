function loadForm(load) {
	if (load) {
		let element = document.createElement('script');
		element.src = 'https://publicformdev.trackwick.com/main.js';
		element.defer = 'defer';
		document.head.appendChild(element);
	}
}
loadForm();
