    if (!window.Intl || !window.Intl.Segmenter) {
      (function() {
        var script = document.createElement('script');
        script.src = 'https://static.parastorage.com/unpkg/@formatjs/intl-segmenter@11.7.10/polyfill.iife.js';
        document.head.appendChild(script);
      })();
    }