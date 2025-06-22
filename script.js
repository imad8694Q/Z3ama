
document.getElementById('download-btn').addEventListener('click', function () {
  const msg = document.getElementById('app-message');
  msg.classList.remove('hidden');
  msg.style.display = 'block';
  setTimeout(() => {
    msg.style.display = 'none';
  }, 5000);
});
