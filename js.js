function customAlert(message) {
    document.querySelector('.ks').style.display = 'block';
    document.getElementById('alertMessage').textContent = message;
    document.getElementById('alertBox').style.display = 'block';
    document.getElementById('alertOverlay').style.display = 'block';
}
  
document.getElementById('closeAlert').addEventListener('click', function() {
    document.getElementById('alertBox').style.display = 'none';
    document.getElementById('alertOverlay').style.display = 'none';
});
