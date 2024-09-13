document.addEventListener('DOMContentLoaded', function() {
      let element = document.createElement('script');
      element.src = 'https://publicformdev.trackwick.com/app.js';
      element.defer = 'defer';
      document.head.appendChild(element);
     const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://publicformdev.trackwick.com/app.css';
      document.head.appendChild(link);
});
