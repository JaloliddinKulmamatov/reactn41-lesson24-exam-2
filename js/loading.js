const loading = document.getElementById("loading");

const loadingDuration = 1000; 

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);